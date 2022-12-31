import { Request, Response } from "express";
import * as driverServices from "../../services/drivers/drivers";
import { IDrivers } from "../../interfaces/IDrivers";
import Drivers from "../../models/drivers";

export const getDrivers = async (req: Request, res: Response) => {
  try {
    if (req.params.id) {
      const data = await driverServices.getDriverByParams(req.params.id);
      return res.send(data);
    }
    const data = await driverServices.getDrivers();
    return res.send(data);
  } catch (e) {
    console.log(`GET/DRIVERS ${e}`);
    return res.status(400).send(driverServices.getDrivers());
  }
};

export const postDriver = async (req: Request, res: Response) => {
  const { firstName, lastName, license, userName }: IDrivers = req.body;
  try {
    const data = await driverServices.postDriver(
      firstName,
      lastName,
      license,
      userName
    );

    return res.status(201).send(data);
  } catch (e) {
    console.log(`POST/DRIVERS ${e}`);
    return res.send("Hubo un error");
  }
};

export const updateDriver = async (req: Request, res: Response) => {
  const { _id, firstName, lastName, license } = req.body;
  try {
    const data = await driverServices.updateDriver(
      _id,
      firstName,
      lastName,
      license
    );
    return res.status(201).send(data);
  } catch (e) {
    console.log(`PUT/DRIVERS ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const deleteDriver = async (req: Request, res: Response) => {
  const { _id } = req.body;
  try {
    const data = await driverServices.deleteDriver(_id);
    return res.status(201).send(data);
  } catch (e) {
    console.log(`DELETE/DRIVERS`);
    return res.status(400).send("Hubo un error");
  }
};
