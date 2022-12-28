import path from "path";

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Travels API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: [`${path.join(__dirname, "../routes/*.ts")}`],
};

export default swaggerSpec;
