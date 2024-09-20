import { sign, verify } from 'jsonwebtoken';
import { jwtpayload } from '../../types';
import config from '../../utils/config';
import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

/**
 * this function generates a new token to be used for authentication
 * @param payload user information
 * @returns token to be used for authentication
 * @throws Error if JWT_SECRET is not defined
 * @example
 * const token = genAccestoken({ _id: '1234', email: 'example@gmail' });
 * console.log(token);
 */
export const genAccestoken = ( payload: jwtpayload ) =>{
    const data = {
        _id: payload._id,
        email: payload.email
    }
    if(!config.JWT_SECRET) throw new Error('JWT_SECRET is not defined');
    return sign(data, config.JWT_SECRET, { expiresIn: '30d' });
}

/**
 * this function verifies the token used for authentication
 * @param _req Request
 * @param _res Response
 * @param next NextFunction
 * @throws Unauthorized if token is invalid
 * @example
 * app.get('/jobs', authorize, getAllJobs);
 */
export const authorize = async (_req:Request, _res: Response, next: NextFunction) =>{
    const authHeader = _req.headers.authorization;
    if(!authHeader) 
        throw new createHttpError.Unauthorized('Unauthorized');
    const token = authHeader.split(' ')[1];
    verify(token, config.JWT_SECRET as string, (err, user) =>{
        if(err) 
            throw new createHttpError.Unauthorized('Unauthorized');
        _req.user = user;
        next();
    })
}

export default { genAccestoken, authorize };