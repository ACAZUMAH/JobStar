"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = exports.checkUserExists = exports.createUser = void 0;
const user_1 = __importDefault(require("../../models/schema/user"));
const http_errors_1 = __importDefault(require("http-errors"));
/**
 * this function creates a new user and returns the created user
 * @param data  user information
 * @returns  created user
 * @throws  InternalServerError if user creation fails
 */
const createUser = async (data) => {
    const create = await user_1.default.create({ ...data });
    if (!create)
        throw new http_errors_1.default.InternalServerError('User creation failed');
    return create;
};
exports.createUser = createUser;
/**
 * this function checks if a user exists in the database during registration
 * @param email  user email
 * @throws  BadRequest if user exists
 */
const checkUserExists = async (email) => {
    if (await user_1.default.findOne({ email }))
        throw new http_errors_1.default.BadRequest('User already exists');
};
exports.checkUserExists = checkUserExists;
/**
 * this function finds a user by email
 * @param email  user email
 * @returns  user
 * @throws  BadRequest if user does not exist
 */
const findUserByEmail = async (email) => {
    const user = await user_1.default.findOne({ email });
    if (!user)
        throw new http_errors_1.default.BadRequest('No user with this email');
    return user;
};
exports.findUserByEmail = findUserByEmail;
