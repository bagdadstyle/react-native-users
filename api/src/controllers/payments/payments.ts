import { Request, Response } from "express";
import Payments from "../../models/payments";
import { IPayments } from "../../interfaces/IPayments";
import * as paymentService from "../../services/payments/payments";

export const getPayments = async (req: Request, res: Response) => {
  try {
    const data = await paymentService.getPayments();
    return res.send(data);
  } catch (e) {
    console.log(`GET/PAYMENTS ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const getOnePayment = async (req: Request, res: Response) => {
  try {
    const data = await paymentService.getOnePayment(req.body._id);
    return res.send(data);
  } catch (e) {
    console.log(`POST/GETONEPAYMENT ${e}`);
    return res.status(400).send("Hubo un error");
  }
};
export const getHistory = async (req: Request, res: Response) => {
  try {
    const data = await paymentService.getHistory(req.body._id);
    return res.send(data);
  } catch (e) {
    console.log(`POST/GET HISTORY ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const postPayment = async (req: Request, res: Response) => {
  const { payment, date, driver }: IPayments = req.body;
  try {
    const data = await paymentService.postPayment(payment, date, driver);
    return res.send(data);
  } catch (e) {
    console.log(`POST/PAYMENT ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const updatePayment = async (req: Request, res: Response) => {
  const { _id, payment, driver, date }: IPayments = req.body;
  try {
    const data = await paymentService.updatePayment(
      _id!,
      payment,
      driver,
      date
    );
    return res.send(data);
  } catch (e) {
    console.log(`PUT/PAYMENT ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const deletePayment = async (req: Request, res: Response) => {
  try {
    const data = await paymentService.deletePayment(req.body._id);
    return res.send(data);
  } catch (e) {
    console.log(`DELETE/PAYMENT ${e}`);
    return res.status(400).send("Hubo un error");
  }
};
