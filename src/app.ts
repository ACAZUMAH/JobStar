require("dotenv").config();
require("express-async-errors");
import express from "express";
import config from "./services/utils/config";
import errorHandler from "./middlewares/errors/error-handler";
import connect from "./models/db";
import route from "./routes/index";
import "./services/types";

const notFound = (_req: express.Request, _res: express.Response) => {
  return _res.status(404).json({ message: "Route not Found" });
};

const startServer = async () => {
  try {
    const app = express();
    app.use(express.json());
    app.use(route);
    app.use(errorHandler);
    app.use(notFound);
    if (config.MONGO_URL) {
      await connect(config.MONGO_URL);
      app.listen(config.PORT, () => {
        console.log(`Server is running on http://localhost:${config.PORT}`);
      });
    }
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
