"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./services/utils/config"));
const error_handler_1 = __importDefault(require("./middlewares/errors/error-handler"));
const db_1 = __importDefault(require("./models/db"));
const index_1 = __importDefault(require("./routes/index"));
require("./services/types");
const notFound = (_req, _res) => {
    return _res.status(404).json({ message: "Route not Found" });
};
const startServer = async () => {
    try {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use(index_1.default);
        app.use(error_handler_1.default);
        app.use(notFound);
        if (config_1.default.MONGO_URL) {
            await (0, db_1.default)(config_1.default.MONGO_URL);
            app.listen(config_1.default.PORT, () => {
                console.log(`Server is running on http://localhost:${config_1.default.PORT}`);
            });
        }
    }
    catch (error) {
        console.error("Error starting server:", error);
    }
};
startServer();
