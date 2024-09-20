"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.createJob = exports.getJob = exports.getAllJobs = void 0;
const express_validator_1 = require("express-validator");
const http_errors_1 = __importDefault(require("http-errors"));
const getAllJobs = async (_req, _res) => {
};
exports.getAllJobs = getAllJobs;
const getJob = async (_req, _res) => {
};
exports.getJob = getJob;
const createJob = async (_req, _res) => {
    const errors = (0, express_validator_1.validationResult)(_req);
    if (!errors.isEmpty()) {
        throw new http_errors_1.default.BadRequest(errors.array()[0].msg);
    }
};
exports.createJob = createJob;
const updateJob = async (_req, _res) => {
};
exports.updateJob = updateJob;
const deleteJob = async (_req, _res) => {
};
exports.deleteJob = deleteJob;
exports.default = {
    getAllJobs: exports.getAllJobs,
    getJob: exports.getJob,
    createJob: exports.createJob,
    updateJob: exports.updateJob,
    deleteJob: exports.deleteJob
};
