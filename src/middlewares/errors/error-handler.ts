import createHttpError from "http-errors";
import { NextFunction, Request, Response } from "express";

const errorHandler = (err: any, _req: Request, _res: Response, next: NextFunction) => {
    if (err instanceof createHttpError.HttpError) {
        return _res.status(err.statusCode).json({ errors: [{ message: err.message }] });
    }

    return _res.status(500).json({ errors: [{ message: 'Internal Server Error' }] });
};

export default errorHandler;