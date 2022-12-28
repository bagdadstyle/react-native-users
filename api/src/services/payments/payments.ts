import Payments from "../../models/payments";

export const getPayments = async () => {
  const data = await Payments.find();
  if (data.length == 0) throw "No se encontró ningún historial";
  return data;
};

export const getOnePayment = async (_id: String) => {
  const data = await Payments.findOne({ _id });
  if (!data) throw "No se encontró historial";
  return data;
};

export const getHistory = async (_id: String) => {
  const data = await Payments.find({ driver: _id });
  if (data.length == 0) throw "No se encontró historial";
  return data;
};

export const postPayment = async (
  payment: Number,
  date: Date,
  driver: String
) => {
  if (!payment || !date || !driver) throw "Faltan Datos";
  await Payments.create({ payment, date, driver });
  return "Pago realizado";
};

export const updatePayment = async (
  _id: String,
  payment: Number,
  driver: String,
  date: Date
) => {
  if (!_id) throw "Faltan Datos";
  await Payments.updateOne({ _id }, { payment, driver, date });
  return "Actualizado";
};

export const deletePayment = async (_id: String) => {
  if (!_id) throw "Faltan Datos";
  await Payments.deleteOne({ _id });
  return "Eliminado";
};
