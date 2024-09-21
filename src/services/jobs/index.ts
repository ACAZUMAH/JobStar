import { Types } from "mongoose";
import job from "../../models/schema/jobs";
import { job as jobType } from "../../services/types";
import createHttpError from "http-errors";

/**
 * this function saves a job to the database
 * @param data job information
 * @returns saved job
 * @throws Error if job creation failed 
 */
export const saveJob = async (data: jobType) =>{
    const create = await job.create({ ...data });
    if(!create) 
        throw new Error('Job creation failed');
    return create;
}

/**
 * this function gets all jobs from the database
 * @returns all jobs
 * @throws Error if no jobs found
 */
export const getJobs = async () =>{
    const jobs = await job.find({});
    if(!jobs)
        throw new Error('No jobs found');   
    return jobs;
}

/**
 * this function gets all jobs posted by a user
 * @param userId user id
 * @returns all jobs by user
 * @throws BadRequest if user has no posted jobs
 */
export const findAllJobsByUser = async (userId: string | Types.ObjectId) =>{
    const jobs = await job.find({ createdBy: userId });
    if(!jobs)
        throw new createHttpError.BadRequest('user has no posted jobs');
    return jobs;    
}

/**
 * this function gets a one job from the database by id
 * @param userId user id
 * @param jobId job id
 * @returns one job by id
 * @throws BadRequest if job not found
 */
export const findJobById = async (userId: string| Types.ObjectId, jobId: string | Types.ObjectId) =>{
    const data = await job.findOne({ createdBy: userId, _id: jobId });
    if(!data)
        throw new createHttpError.BadRequest('job not found');
    return data;
}

export default { saveJob, getJobs, findAllJobsByUser, findJobById };