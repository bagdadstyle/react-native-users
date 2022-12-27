import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import index from "./routes/index";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/", index);

export default app;
