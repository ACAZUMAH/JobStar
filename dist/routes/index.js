"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("./auth-route"));
const jobs_route_1 = __importDefault(require("./jobs-route"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the job portal API' });
});
router.use('/api', auth_route_1.default);
router.use('/api', jobs_route_1.default);
exports.default = router;
