import axios from "axios";

export const getAllDrivers = async () => {
  try {
    const data = await axios.get("http://192.168.1.11:3001/drivers");
    return data.data;
  } catch (err) {
    console.log(`ERROR ${err}`);
    return err;
  }
};

export const getDriverById = async (id: string) => {
  try {
    const data = await axios.get(`http://192.168.1.11:3001/drivers/${id}`);
    if (data.data) return data.data;
    throw "No se encontro el usuario requerido";
  } catch (err) {
    console.log(`CATCH/GETDRIVERBYID ${err}`);
    return err;
  }
};
