"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("./auth-route"));
const jobs_route_1 = __importDefault(require("./jobs-route"));
const jwt_1 = __importDefault(require("../services/authservices/jwt"));
const router = (0, express_1.Router)();
router.use('/api/v1/jobly', auth_route_1.default);
router.use('/api/v1/jobly', jwt_1.default.authorize, jobs_route_1.default);
exports.default = router;
