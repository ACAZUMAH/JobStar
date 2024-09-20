"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveJob = void 0;
const jobs_1 = __importDefault(require("../../models/schema/jobs"));
const saveJob = async (data) => {
    const create = await jobs_1.default.create({ ...data });
    if (!create)
        throw new Error('Job creation failed');
    return true;
};
exports.saveJob = saveJob;
