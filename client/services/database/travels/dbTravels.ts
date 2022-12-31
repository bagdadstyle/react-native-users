import axios from "axios";

export const getAllTravels = async () => {
  try {
    const data = await axios.get("http://192.168.1.11:3001/travels");
    return data.data;
  } catch (err) {
    console.log(`ERROR ${err}`);
  }
};

export const getTravelById = async (id: string) => {
  try {
    console.log(id);
    const data = await axios.post(`http://192.168.1.11:3001/travels/one/${id}`);
    if (data.data) return data.data;
    throw "No se encontró el viaje requerido";
  } catch (err) {
    console.log(`CATCH/GETTRAVELBYID${err}`);
  }
};
