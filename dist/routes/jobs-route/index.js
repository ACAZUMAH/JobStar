"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jobs_1 = __importDefault(require("../../controllers/jobs"));
const validators_1 = __importDefault(require("../../middlewares/validators"));
const jwt_1 = __importDefault(require("../../services/authservices/jwt"));
const validate_1 = require("../../middlewares/validators/validate");
const router = (0, express_1.Router)();
router.route('/search')
    .get(jobs_1.default.searchJobs);
router.route('/jobs')
    .get(jobs_1.default.getAllJobs);
router.route('/job')
    .post(jwt_1.default.authorize, (0, validators_1.default)(validate_1.validateJob), jobs_1.default.createJob);
router.route('/jobs/user')
    .get(jwt_1.default.authorize, jobs_1.default.getAllJobsByUser);
router.route('/job/user')
    .get(jwt_1.default.authorize, jobs_1.default.getJob);
router.route('/job')
    .put(jwt_1.default.authorize, (0, validators_1.default)(validate_1.ValidateUpdateJob), jobs_1.default.updateJob);
router.route('/job')
    .delete(jwt_1.default.authorize, jobs_1.default.deleteJob);
exports.default = router;
