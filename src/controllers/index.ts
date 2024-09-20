import { Request, Response } from "express"
import { validationResult } from "express-validator";
import createHttpError from "http-errors";

export const getAllJobs = async (_req: Request, _res: Response) =>{

};
export const getJob = async (_req: Request, _res: Response) =>{

};   
export const createJob = async (_req: Request, _res: Response) =>{
    const errors = validationResult(_req);
    if (!errors.isEmpty()){
        throw new createHttpError.BadRequest(errors.array()[0].msg);
    }

};
export const updateJob = async (_req: Request, _res: Response) =>{  

};
export const deleteJob = async (_req: Request, _res: Response) =>{
        
};

export default { 
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}  