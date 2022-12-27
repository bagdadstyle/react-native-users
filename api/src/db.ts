import mongoose from "mongoose";
import "dotenv/config";

const db = () => {
  mongoose
    .connect(process.env.DB_URI!)
    .then(() => {
      console.log("DB Connect");
    })
    .catch(() => {
      console.log("Error al conectar DB");
    });
};

export default db;
