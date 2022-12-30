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
