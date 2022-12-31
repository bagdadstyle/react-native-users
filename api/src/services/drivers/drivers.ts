import Drivers from "../../models/drivers";

export const getDrivers = async () => {
  const data = await Drivers.find();
  if (data.length == 0) throw "No data";
  return data;
};

export const postDriver = async (
  firstName: String,
  lastName: String,
  license: Date,
  userName: String
) => {
  await Drivers.create({
    firstName,
    lastName,
    license,
    userName,
  });
  return "Creado";
};

export const updateDriver = async (
  _id: String,
  firstName: String,
  lastName: String,
  license: String
) => {
  await Drivers.updateOne({ _id }, { firstName, lastName, license });
  return "Actualizado";
};

export const deleteDriver = async (_id: String) => {
  await Drivers.deleteOne({ _id });
  return "Eliminado";
};

export const getDriverByParams = async (id: string) => {
  const data = await Drivers.findOne({ _id: id });
  if (data) return data;
  throw "No se encontró información";
};
