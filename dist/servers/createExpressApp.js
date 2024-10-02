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
const errors_1 = __importDefault(require("../middlewares/errors"));
const index_1 = __importDefault(require("../routes/index"));
require("../services/types");
const rate = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
const createApp = async () => {
    const app = (0, express_1.default)();
    app.set("trust proxy", 1);
    app.use(rate);
    app.use(express_1.default.json());
    app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)());
    app.use((0, xss_clean_1.default)());
    app.use(index_1.default);
    app.use(errors_1.default.errorHandler);
    app.use(errors_1.default.notFound);
    return app;
};
exports.default = createApp;
