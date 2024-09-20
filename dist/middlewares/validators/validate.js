"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJob = exports.validateLogin = exports.validateSignup = void 0;
exports.validateSignup = {
    name: {
        isString: true,
        notEmpty: {
            errorMessage: 'please provide your name',
        },
        isLength: {
            options: { min: 3, max: 30 },
        },
    },
    email: {
        isEmail: true,
        notEmpty: {
            errorMessage: 'please provide your email',
        },
    },
    password: {
        isString: true,
        notEmpty: {
            errorMessage: 'please provide your password',
        },
    },
};
exports.validateLogin = {
    email: {
        isEmail: true,
        notEmpty: {
            errorMessage: 'please provide your email',
        },
    },
    password: {
        isString: true,
        notEmpty: {
            errorMessage: 'please provide your password',
        },
    },
};
exports.validateJob = {
    company: {
        isString: true,
        notEmpty: {
            errorMessage: 'please provide the company name',
        },
    },
    position: {
        isString: true,
        notEmpty: {
            errorMessage: 'please provide the position',
        },
    },
    status: {
        isString: true,
        notEmpty: {
            errorMessage: 'please provide the status',
        },
    },
};
