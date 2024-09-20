import { genSalt, hash, compare } from 'bcrypt';



/**
 * this function hashes user password
 * @param password user password
 * @returns the hashed password
 * @throws Error if hashing fails
 * @example
 * const hashed = await hashedPassword('password')
 * console.log(hashed)
 */
export const hashPassword = async (password: string) => {
    try {
        const saltRounds = await genSalt(10);
        return await hash(password, saltRounds);
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

/**
 * this function compares user password with hashed password
 * @param password password received login details
 * @param hash hashed password from database
 * @returns true if password matches, false otherwise
 * @throws Error if comparison fails
 * @example
 * const isMatch = await comparePass('password', 'hashedPassword')
 * console.log(isMatch)
 */
export const comparePassword = async (password: string, hash: string) => {
    try {
        return await compare(password, hash);
    } catch (error) {
        throw new Error('Error comparing password');
    }
}