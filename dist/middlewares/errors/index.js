"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
/**
 *
 * @param err
 * @param _req
 * @param _res
 * @param next
 * @returns
 */
const errorHandler = (err, _req, _res, next) => {
    if (err instanceof http_errors_1.default.HttpError) {
        return _res.status(err.statusCode).json({ errors: [{ message: err.message }] });
    }
    return _res.status(500).json({ errors: [{ message: 'Internal Server Error' }] });
};
/**
 *
 * @param _req
 * @param _res
 * @returns
 */
const notFound = (_req, _res) => {
    return _res.status(404).json({ message: "Route not Found" });
};
exports.default = {
    errorHandler,
    notFound
};
