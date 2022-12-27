import { Request, Response } from "express";
import Payments from "../../models/payments";
import { IPayments } from "../../interfaces/IPayments";

export const getPayments = async (req: Request, res: Response) => {
  try {
    const data = await Payments.find();
    if (data.length == 0)
      return res.status(400).send("No se encontró ningún historial");
    return res.send(data);
  } catch (e) {
    console.log(`GET/PAYMENTS ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const getOnePayment = async (req: Request, res: Response) => {
  const { _id } = req.body;
  try {
    const data = await Payments.findOne({ _id });
    if (!data) return res.status(400).send("No se encontró historial");
    return res.send(data);
  } catch (e) {
    console.log(`POST/GETONEPAYMENT ${e}`);
    return res.status(400).send("Hubo un error");
  }
};
export const getHistory = async (req: Request, res: Response) => {
  try {
    const data = await Payments.find({ driver: req.body._id });
    if (data.length == 0) return res.send("No se encontró historial");
    return res.send(data);
  } catch (e) {
    console.log(`POST/GET HISTORY ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const postPayment = async (req: Request, res: Response) => {
  const { payment, date, driver }: IPayments = req.body;
  try {
    await Payments.create({ payment, date, driver });
    return res.status(201).send("Pago Creado");
  } catch (e) {
    console.log(`POST/PAYMENT ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const updatePayment = async (req: Request, res: Response) => {
  const { payment, driver, date, _id }: IPayments = req.body;
  try {
    await Payments.updateOne({ _id }, { payment, driver, date });
    return res.status(201).send("Actualizado");
  } catch (e) {
    console.log(`PUT/PAYMENT ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const deletePayment = async (req: Request, res: Response) => {
  try {
    await Payments.deleteOne({ _id: req.body._id });
    return res.status(201).send("Eliminado");
  } catch (e) {
    console.log(`DELETE/PAYMENT ${e}`);
    return res.status(400).send("Hubo un error");
  }
};
