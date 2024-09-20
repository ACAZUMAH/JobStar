"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../../controllers"));
const jwt_1 = require("../../services/authservices/jwt");
const validate_1 = require("../../middlewares/validators/validate");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.route('/post')
    .post(jwt_1.authorize, (0, express_validator_1.checkSchema)(validate_1.validateJob), controllers_1.default.createJob)
    .get(controllers_1.default.getAllJobs);
router.route('/jobs/:id')
    .get(controllers_1.default.getJob)
    .put(controllers_1.default.updateJob)
    .delete(controllers_1.default.deleteJob);
exports.default = router;
