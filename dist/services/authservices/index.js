"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.regiser = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const hash_1 = require("../utils/hash");
const user_1 = require("../user");
const jwt_1 = require("./jwt");
/**
 * this conroller registers a new user
 * @param _req Request
 * @param _res Response
 * @returns user name and token
 * @throws BadRequest if validation fails and user already exists
 */
const regiser = async (_req, _res) => {
    const { name, email, password } = _req.body;
    await (0, user_1.checkUserExists)(email);
    const user = await (0, user_1.createUser)({ name, email, password });
    const token = (0, jwt_1.genAccestoken)({ _id: user._id, email: user.email });
    return _res.status(201).json({ status: 'success', data: { user: user.name, token } });
};
exports.regiser = regiser;
/**
 * this controller logs in a user
 * @param _req Request
 * @param _res Response
 * @returns user name and token
 * @throws BadRequest if validation fails,
 * user does not exist or password is incorrect
 */
const login = async (_req, _res) => {
    const { email, password } = _req.body;
    const user = await (0, user_1.findUserByEmail)(email);
    const match = await (0, hash_1.comparePassword)(password, user.password);
    if (!match)
        throw new http_errors_1.default.BadRequest('Invalid credentials');
    const token = (0, jwt_1.genAccestoken)({ _id: user._id, email: user.email });
    return _res.status(200).json({ status: 'success', data: { user: user.name, token } });
};
exports.login = login;
exports.default = { regiser: exports.regiser, login: exports.login };
