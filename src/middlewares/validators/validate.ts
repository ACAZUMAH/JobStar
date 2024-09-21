import { body } from 'express-validator';
export const validateSignup = [
    body('name')
        .isString()
        .notEmpty()
        .withMessage('please provide your name')
        .isLength({ min: 3, max: 30 })
        .withMessage('name should be atleast 3 characters'),
    body('email')
        .isEmail()
        .normalizeEmail()
        .notEmpty()
        .withMessage('please provide your email'),
    body('password')
        .isString()
        .notEmpty()
        .withMessage('please provide your password')
        .isLength({ min: 6 })
        .withMessage('password should be atleast 6 characters'),
];

export const validateLogin = [
    body('email')
        .isEmail()
        .normalizeEmail()
        .notEmpty()
        .withMessage('please provide your email'),
    body('password')
        .isString()
        .notEmpty()
        .withMessage('please provide your password'),
];

export const validateJob = [
    body('company')
        .isString()
        .notEmpty()
        .withMessage('please provide the company name')
        .isLength({ min: 3, max: 50 })
        .withMessage('company name should be atleast 3 characters'),
    body('position')
        .isString()
        .notEmpty()
        .withMessage('please provide the position')
        .isLength({ min: 3, max: 100 })
        .withMessage('position should be atleast 3 characters'),
    body('status')
        .isString()
        .notEmpty()
        .withMessage('please provide the status'),
    body('salary')
        .isNumeric()
        .notEmpty()
        .withMessage('please provide salary')
];

export const ValidateUpdateJob = [
    body('company')
        .isString()
        .optional()
        .notEmpty()
        .withMessage('please provide the company name')
        .isLength({ min: 3, max: 50 })
        .withMessage('company name should be atleast 3 characters'),
    body('position')
        .isString()
        .optional()
        .notEmpty()
        .withMessage('please provide the position')
        .isLength({ min: 3, max: 100 })
        .withMessage('position should be atleast 3 characters'),
    body('status')
        .isString()
        .optional()
        .notEmpty()
        .withMessage('please provide the status'),
    body('salary')
        .isString()
        .optional()
        .notEmpty()
        .withMessage('please provide salary')
];