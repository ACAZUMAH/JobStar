import { Request, Response } from "express";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";
import job, { saveJob, findJobById } from "../services/jobs";

/**
 * this controller gets all jobs from the database
 * @param _req Request
 * @param _res Response
 * @returns all jobs
 */
export const getAllJobs = async (_req: Request, _res: Response) =>{    
    const jobs = await job.getJobs();
    return  _res.status(200).json({ status: 'success', data: jobs });
};

/**
 * this controller gets all jobs posted by a user
 * @param _req Request
 * @param _res Response
 * @throws BadRequest if user has no posted jobs
 */
export const getAllJobsByUser = async (_req: Request, _res: Response) =>{
    const jobs = await job.findAllJobsByUser(_req.user._id);
    return  _res.status(200).json({ status: 'success', data: jobs });
}

/**
 * this controller gets a one job from the database by id
 * @param _req Request
 * @param _res Response
 * @returns one job by id
 * @throws BadRequest if job not found
 */
export const getJob = async (_req: Request, _res: Response) =>{
    const jobId = _req.params.id;
    const data = await job.findJobById(_req.user._id, jobId);
    return _res.status(200).json({ status: 'success', data: data });
}; 

/**
 * this controller saves a job to the database
 * @param _req Request
 * @param _res Response
 * @returns saved job
 * @throws BadRequest if job creation failed
 */
export const createJob = async (_req: Request, _res: Response) =>{
    const errors = validationResult(_req);
    if (!errors.isEmpty()){
        throw new createHttpError.BadRequest(errors.array()[0].msg);
    }
    const save = await saveJob({ ..._req.body, createdBy: _req.user._id, });
    return _res.status(201).json({ status: 'success', data: save });
};

export const updateJob = async (_req: Request, _res: Response) =>{  

};
export const deleteJob = async (_req: Request, _res: Response) =>{
        
};

export default { 
    getAllJobsByUser,
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}  