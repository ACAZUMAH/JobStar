"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;
exports.default = {
    PORT,
    MONGO_URL,
    JWT_SECRET
};
