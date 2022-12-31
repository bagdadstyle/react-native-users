import axios from "axios";
import moment from "moment";
import { IDrivers } from "../../../Interfaces/IDrivers";
import "moment/locale/es";

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
    let { data } = await axios.post(
      `http://192.168.1.11:3001/travels/one/${id}`
    );
    if (data) {
      data = Object.assign({}, ...data);
      data.departure = moment(data.departure)
        .locale("es")
        .format("MMM D, h:mm a");
      data.arrival = moment(data.arrival).locale("es").format("MMM D, h:mm a");
      data.drivers.forEach((e: IDrivers) => {
        e.license = moment(data.license).locale("es").format("MMM D, YYYY");
      });
      console.log(data);
      return data;
    }
    throw "No se encontró el viaje requerido";
  } catch (err) {
    console.log(`CATCH/GETTRAVELBYID${err}`);
  }
};
