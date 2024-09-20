"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = require("bcrypt");
/**
 * this function hashes user password
 * @param password user password
 * @returns the hashed password
 * @throws Error if hashing fails
 * @example
 * const hashed = await hashedPassword('password')
 * console.log(hashed)
 */
const hashPassword = async (password) => {
    try {
        const saltRounds = await (0, bcrypt_1.genSalt)(10);
        return await (0, bcrypt_1.hash)(password, saltRounds);
    }
    catch (error) {
        throw new Error('Error hashing password');
    }
};
exports.hashPassword = hashPassword;
/**
 * this function compares user password with hashed password
 * @param password password received login details
 * @param hash hashed password from database
 * @returns true if password matches, false otherwise
 * @throws Error if comparison fails
 * @example
 * const isMatch = await comparePass('password', 'hashedPassword')
 * console.log(isMatch)
 */
const comparePassword = async (password, hash) => {
    try {
        return await (0, bcrypt_1.compare)(password, hash);
    }
    catch (error) {
        throw new Error('Error comparing password');
    }
};
exports.comparePassword = comparePassword;
