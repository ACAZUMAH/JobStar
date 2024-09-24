"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../../controllers"));
const validators_1 = __importDefault(require("../../middlewares/validators"));
const jwt_1 = __importDefault(require("../../services/authservices/jwt"));
const validate_1 = require("../../middlewares/validators/validate");
const router = (0, express_1.Router)();
router.route('/search')
    .get(controllers_1.default.searchJobs);
router.route('/jobs')
    .get(controllers_1.default.getAllJobs);
router.route('/jobs/post')
    .post(jwt_1.default.authorize, (0, validators_1.default)(validate_1.validateJob), controllers_1.default.createJob);
router.route('/jobs/user')
    .get(jwt_1.default.authorize, controllers_1.default.getAllJobsByUser);
router.route('/jobs/user')
    .get(jwt_1.default.authorize, controllers_1.default.getJob);
router.route('/jobs/update')
    .put(jwt_1.default.authorize, (0, validators_1.default)(validate_1.ValidateUpdateJob), controllers_1.default.updateJob);
router.route('/jobs/delete')
    .delete(jwt_1.default.authorize, controllers_1.default.deleteJob);
exports.default = router;
