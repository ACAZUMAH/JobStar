"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const start_1 = __importDefault(require("./start"));
const db_1 = __importDefault(require("../models/db"));
const http_1 = __importDefault(require("http"));
const start = async () => {
    try {
        await (0, db_1.default)(process.env.MONGO_URL);
        const app = await (0, start_1.default)();
        const server = http_1.default.createServer(start_1.default);
        server.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    }
    catch (error) {
        console.error("Error starting server:", error);
    }
};
exports.default = start;
