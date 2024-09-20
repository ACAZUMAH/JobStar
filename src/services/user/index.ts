import User from '../../models/schema/user';
import createHttpError from 'http-errors';
import { user } from '../types/index';

/**
 * this function creates a new user and returns the created user
 * @param data  user information
 * @returns  created user
 * @throws  InternalServerError if user creation fails
 */
export const createUser = async (data: user) => {
    const create = await User.create({ ...data });
    if(!create) 
        throw new createHttpError.InternalServerError('User creation failed');
    return create;
}

/**
 * this function checks if a user exists in the database during registration
 * @param email  user email
 * @throws  BadRequest if user exists
 */
export const checkUserExists = async (email: string) => {
    if(await User.findOne({ email  }))
        throw new createHttpError.BadRequest('User already exists');
}

/**
 * this function finds a user by email
 * @param email  user email
 * @returns  user
 * @throws  BadRequest if user does not exist
 */
export const findUserByEmail = async (email: string) => {
    const user = await User.findOne({ email }); 
    if(!user)
        throw new createHttpError.BadRequest('No user with this email');
    return user;
}