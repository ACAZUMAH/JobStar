"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const authservices_1 = __importDefault(require("../../services/authservices"));
const validate_1 = require("../../middlewares/validators/validate");
const router = (0, express_1.Router)();
router.post('/register', (0, express_validator_1.checkSchema)(validate_1.validateSignup), authservices_1.default.regiser);
router.post('/login', (0, express_validator_1.checkSchema)(validate_1.validateLogin), authservices_1.default.login);
exports.default = router;
