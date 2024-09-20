"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.genAccestoken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = __importDefault(require("../../utils/config"));
const http_errors_1 = __importDefault(require("http-errors"));
/**
 * this function generates a new token to be used for authentication
 * @param payload user information
 * @returns token to be used for authentication
 * @throws Error if JWT_SECRET is not defined
 * @example
 * const token = genAccestoken({ _id: '1234', email: 'example@gmail' });
 * console.log(token);
 */
const genAccestoken = (payload) => {
    const data = {
        _id: payload._id,
        email: payload.email
    };
    if (!config_1.default.JWT_SECRET)
        throw new Error('JWT_SECRET is not defined');
    return (0, jsonwebtoken_1.sign)(data, config_1.default.JWT_SECRET, { expiresIn: '30d' });
};
exports.genAccestoken = genAccestoken;
/**
 * this function verifies the token used for authentication
 * @param _req Request
 * @param _res Response
 * @param next NextFunction
 * @throws Unauthorized if token is invalid
 * @example
 * app.get('/jobs', authorize, getAllJobs);
 */
const authorize = async (_req, _res, next) => {
    const authHeader = _req.headers.authorization;
    if (!authHeader)
        throw new http_errors_1.default.Unauthorized('Unauthorized');
    const token = authHeader.split(' ')[1];
    (0, jsonwebtoken_1.verify)(token, config_1.default.JWT_SECRET, (err, user) => {
        if (err)
            throw new http_errors_1.default.Unauthorized('Unauthorized');
        _req.user = user;
        next();
    });
};
exports.authorize = authorize;
exports.default = { genAccestoken: exports.genAccestoken, authorize: exports.authorize };
