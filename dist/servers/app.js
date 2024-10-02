"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createExpressApp_1 = __importDefault(require("./createExpressApp"));
const db_1 = __importDefault(require("../models/db"));
const http_1 = __importDefault(require("http"));
const start = async () => {
    await (0, db_1.default)(process.env.MONGO_URL);
    const app = await (0, createExpressApp_1.default)();
    const server = http_1.default.createServer(app);
    server.listen(process.env.PORT || 3000, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
};
exports.default = start;
