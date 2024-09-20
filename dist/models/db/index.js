"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = require("mongoose");
const connectDB = async (url) => {
    return await (0, mongoose_1.connect)(url, {
        autoIndex: true,
    });
};
exports.connectDB = connectDB;
exports.default = exports.connectDB;
