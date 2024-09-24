"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
require("express-async-errors");
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./services/utils/config"));
const errors_1 = __importDefault(require("./middlewares/errors"));
const db_1 = __importDefault(require("./models/db"));
const index_1 = __importDefault(require("./routes/index"));
require("./services/types");
const app = (0, express_1.default)();
app.set('trust proxy', 1);
app.use((0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100
}));
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, xss_clean_1.default)());
app.use(index_1.default);
app.use(errors_1.default.errorHandler);
app.use(errors_1.default.notFound);
const startServer = async () => {
    try {
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
