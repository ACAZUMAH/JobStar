import { Request, Response } from 'express';
import createHttpError from 'http-errors';
import { validationResult } from 'express-validator';
import { comparePassword } from '../utils/hash';
import { createUser, checkUserExists, findUserByEmail } from '../user';
import { genAccestoken } from './jwt';

/**
 * this conroller registers a new user
 * @param _req Request
 * @param _res Response
 * @returns user name and token
 * @throws BadRequest if validation fails and user already exists
 */
export const regiser = async (_req: Request, _res: Response) =>{
    const { name, email, password } = _req.body;
    await checkUserExists(email);
    const user = await createUser({ name, email, password });
    const token = genAccestoken({ _id: user._id, email: user.email });
    return _res.status(201).json( { status: 'success', data:{ user: user.name,  token }});
};

/**
 * this controller logs in a user
 * @param _req Request
 * @param _res Response
 * @returns user name and token
 * @throws BadRequest if validation fails, 
 * user does not exist or password is incorrect
 */
export const login = async (_req: Request, _res: Response) =>{
    const { email, password } = _req.body;
    const user = await findUserByEmail(email) 
    const match = await comparePassword(password, user.password);
    if(!match) 
        throw new createHttpError.BadRequest('Invalid credentials');
    const token = genAccestoken({ _id: user._id, email: user.email });
    return _res.status(200).json( { status: 'success', data:{ user: user.name,  token }});
};

export default { regiser, login };