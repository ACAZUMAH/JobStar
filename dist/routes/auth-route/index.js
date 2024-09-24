"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authservices_1 = __importDefault(require("../../services/authservices"));
const validators_1 = __importDefault(require("../../middlewares/validators"));
const validate_1 = require("../../middlewares/validators/validate");
const router = (0, express_1.Router)();
router.post('/auth/register', (0, validators_1.default)(validate_1.validateSignup), authservices_1.default.regiser);
router.post('/auth/login', (0, validators_1.default)(validate_1.validateLogin), authservices_1.default.login);
exports.default = router;
