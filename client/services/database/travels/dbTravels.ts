import axios from "axios"

export const getAllTravels = async () => {
    try {
      const data = await axios.get("http://192.168.1.11:3001/travels");
      return data.data;
    } catch (err) {
      console.log(`ERROR ${err}`);
    }
};