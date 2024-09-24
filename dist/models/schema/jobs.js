"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobSchema = void 0;
const mongoose_1 = require("mongoose");
exports.jobSchema = new mongoose_1.Schema({
    company: {
        type: String,
        required: true,
        maxLength: 50,
    },
    position: {
        type: String,
        required: true,
        maxLength: 100,
    },
    status: {
        type: String,
        required: true,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    salary: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: mongoose_1.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, { timestamps: true });
const Job = (0, mongoose_1.model)('Jobs', exports.jobSchema);
exports.default = Job;
