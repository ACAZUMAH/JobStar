require("dotenv").config();
require("express-async-errors");
import helmet from "helmet";
import cors from "cors";
import xss from "xss-clean";
import limit from "express-rate-limit";
import express from "express";
import config from "./services/utils/config";
import errors from "./middlewares/errors";
import connect from "./models/db";
import route from "./routes/index";
import "./services/types";

const app = express();
app.set('trust proxy', 1)
app.use(limit({
  windowMs: 15 * 60 * 1000,
  max: 100
}))
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(route);
app.use(errors.errorHandler);
app.use(errors.notFound);

const startServer = async () => {
  try {
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
