import Travels from "../../models/travels";
import mongoose from "mongoose";

export const getOneTravel = async (_id: String | any) => {
  // const data = await Travels.findOne({ _id });
  // const id = new mongoose.Types.ObjectId(_id)
  // console.log(id)
  const data = await Travels.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(_id) },
    },
    {
      $lookup: {
        from: "drivers",
        localField: "drivers",
        foreignField: "_id",
        as: "drivers",
      },
    },
  ]);
  if (!data) throw "No se encontró el viaje solicitado";
  return data;
};

export const getTravels = async () => {
  const data = await Travels.aggregate([
    {
      $lookup: {
        from: "drivers", //////// Busco en la collecion externa
        localField: "drivers", /////// Busco en la collecion actual
        foreignField: "_id", //// busco en la coleccion externa y comparo con el campo actual
        as: "drivers", /// creo un campo nuevo con los datos comparados
      },
    },
  ]);
  console.log(data);
  if (data.length == 0) throw "No se encontraron viajes";
  return data;
};

export const postTravels = async (
  name: String,
  departure: Date,
  arrival: Date,
  drivers: String,
  userName: String
) => {
  await Travels.create({
    name,
    departure,
    arrival,
    drivers,
    userName,
  });
  return "Viaje creado";
};

export const updateTravel = async (
  _id: String,
  name: String,
  departure: Date,
  arrival: Date,
  drivers: String
) => {
  await Travels.updateOne({ _id }, { name, departure, arrival, drivers });
  return "Viaje Actualizado";
};

export const deleteTravel = async (_id: String) => {
  await Travels.deleteOne({ _id });
  return "Viaje eliminado";
};
