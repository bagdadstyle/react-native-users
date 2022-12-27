import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import index from "./routes/index";
import swaggerSpec from "./services/swaggerSpec";

//SWAGGER
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const app = express();

//--------MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);
app.use(morgan("dev"));

app.use("/", index);

export default app;
