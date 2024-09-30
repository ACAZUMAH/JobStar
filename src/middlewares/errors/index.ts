import createHttpError from "http-errors";
import { NextFunction, Request, Response } from "express";

/**
 * catch all errors and return a response with custom error message
 * @param err error object
 * @param _req Request
 * @param _res Response
 * @param next NextFunction
 * @returns response with error message
 */
const errorHandler = (err: any, _req: Request, _res: Response, next: NextFunction) => {
    if (err instanceof createHttpError.HttpError) {
        return _res.status(err.statusCode).json({ errors: [{ message: err.message }] });
    }
    return _res.status(500).json({ errors: [{ message: 'Internal Server Error' }] });
};

/**
 * return a response with custom error message for route not found
 * @param _req Request
 * @param _res Response
 * @returns response with error message
 */
const notFound = (_req: Request, _res: Response) => {
    return _res.status(404).json({ message: "Route not Found" });
};

export default{
    errorHandler,
    notFound
} 