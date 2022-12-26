import { Request, Response } from "express";
import Travels from "../../models/travels";
import { ITravel } from "../../interfaces/ITravel";

export const getTravels = async (req: Request, res: Response) => {
  const data = await Travels.find();
  if (data.length == 0) return res.status(400).send("No se encontraron viajes");
  return res.send(data);
};

export const postTravels = async (req: Request, res: Response) => {
  const { name, arrival, departure }: ITravel = req.body;
  try {
    await Travels.create({
      name,
      arrival,
      departure,
    });
    return res.send("Viaje creado");
  } catch (e) {
    console.log(`POST/TRAVELS ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const updateTravel = async (req: Request, res: Response) => {
  console.log(req.body);
  const { _id, name, departure, arrival } = req.body;
  try {
    await Travels.updateOne({ _id }, { name, departure, arrival });
    return res.status(201).send("Viaje Actualizado");
  } catch (e) {
    console.log(`PUT/TRAVELS ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const deleteTravel = async (req: Request, res: Response) => {
  const { _id } = req.body;
  try {
    await Travels.deleteOne({ _id });
    return res.status(201).send("Viaje eliminado");
  } catch (e) {
    console.log(e);
    return res.status(400).send("Hubo un error");
  }
};
