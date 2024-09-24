import createHttpError from "http-errors";
import { NextFunction, Request, Response } from "express";

/**
 * 
 * @param err 
 * @param _req 
 * @param _res 
 * @param next 
 * @returns 
 */
const errorHandler = (err: any, _req: Request, _res: Response, next: NextFunction) => {
    if (err instanceof createHttpError.HttpError) {
        return _res.status(err.statusCode).json({ errors: [{ message: err.message }] });
    }
    return _res.status(500).json({ errors: [{ message: 'Internal Server Error' }] });
};

/**
 * 
 * @param _req 
 * @param _res 
 * @returns 
 */
const notFound = (_req: Request, _res: Response) => {
    return _res.status(404).json({ message: "Route not Found" });
};

export default{
    errorHandler,
    notFound
} 