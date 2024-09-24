"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const hash_1 = require("../../services/utils/hash");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        minlentgh: 3,
        maxLength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});
userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await (0, hash_1.hashPassword)(this.password);
    }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
