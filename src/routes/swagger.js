import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Convertidor de Video", version: "1.0.0" },
  },
  apis: [
    "src/routes/VideoRoutes.js",
    "src/routes/ImagenRoutes.js",
  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/docs", serve, setup(swaggerSpec));
  app.get("/api/docs", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Versión 1 Docs are available at http://localhost:${port}/api/docs`
  );
};

export default  swaggerDocs ;
