import { Request, Response } from "express";
import { IDrivers } from "../../interfaces/IDrivers";
import Drivers from "../../models/drivers";

export const getDrivers = async (req: Request, res: Response) => {
  try {
    const data = await Drivers.find();
    if (data.length == 0) return res.send("No se encontraron datos");
    return res.send(data);
  } catch (e) {
    console.log(`GET/DRIVERS ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const postDriver = async (req: Request, res: Response) => {
  const { firstName, lastName, license }: IDrivers = req.body;
  try {
    await Drivers.create({
      firstName,
      lastName,
      license,
    });
    return res.status(201).send("Creado");
  } catch (e) {
    console.log(`POST/DRIVERS ${e}`);
    return res.send("Hubo un error");
  }
};

export const updateDriver = async (req: Request, res: Response) => {
  const { _id, firstName, lastName, license } = req.body;
  try {
    await Drivers.updateOne({ _id }, { firstName, lastName, license });
    return res.status(201).send("Actualizado");
  } catch (e) {
    console.log(`PUT/DRIVERS ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const deleteDriver = async (req: Request, res: Response) => {
  const { _id } = req.body;
  try {
    await Drivers.deleteOne({ _id });
    return res.status(201).send("Eliminado");
  } catch (e) {
    console.log(`DELETE/DRIVERS`);
    return res.status(400).send("Hubo un error");
  }
};
