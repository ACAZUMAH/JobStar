require("dotenv").config();
require("express-async-errors");
import helmet from "helmet";
import cors from "cors";
import xss from "xss-clean";
import limit from "express-rate-limit";
import express, { Application } from "express";
import errors from "../middlewares/errors";
import route from "../routes/index";
import "../services/types";

const rate =   limit({
  windowMs: 15 * 60 * 1000,
  max: 100,
})

const createApp = async (): Promise<Application> => {
  const app = express();
  app.set("trust proxy", 1);
  app.use(rate);
  app.use(express.json());
  app.use(helmet());
  app.use(cors());
  app.use(xss());
  app.use(route);
  app.use(errors.errorHandler);
  app.use(errors.notFound);
  return app;
};

export default createApp;
