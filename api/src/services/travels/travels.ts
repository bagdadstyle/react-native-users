import Travels from "../../models/travels";

export const getOneTravel = async (_id: String) => {
  const data = await Travels.findOne({ _id });
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
