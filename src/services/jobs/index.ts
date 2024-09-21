import { Types } from "mongoose";
import job from "../../models/schema/jobs";
import { job as jobType, queryType, update } from "../../services/types";
import createHttpError from "http-errors";

/**
 * this function saves a job to the database
 * @param data job information
 * @returns saved job
 * @throws Error if job creation failed
 */
export const saveJob = async (data: jobType) => {
  const create = await job.create({ ...data });
  if (!create) throw new Error("Job creation failed");
  return create;
};

/**
 * this function gets all jobs from the database
 * @returns all jobs
 * @throws Error if no jobs found
 */
export const getJobs = async () => {
  const jobs = await job.find({});
  if (!jobs) throw new Error("No jobs found");
  return jobs;
};

/**
 * this function gets all jobs posted by a user
 * @param userId user id
 * @returns all jobs by user
 * @throws BadRequest if user has no posted jobs
 */
export const findAllJobsByUser = async (userId: string | Types.ObjectId) => {
  const jobs = await job.find({ createdBy: userId });
  if (!jobs) throw new createHttpError.BadRequest("user has no posted jobs");
  return jobs;
};

/**
 * this function gets a one job from the database by id
 * @param userId user id
 * @param jobId job id
 * @returns one job by id
 * @throws BadRequest if job not found
 */
export const findJobById = async (
  userId: string | Types.ObjectId,
  jobId: string | Types.ObjectId
) => {
  const data = await job.findOne({ createdBy: userId, _id: jobId });
  if (!data) throw new createHttpError.BadRequest("job not found");
  return data;
};

/**
 * this function updates a job in the database
 * @param data userId, jobId and new job data to update
 * @returns updated job
 */
export const updateJob = async (data: update) => {
  if (data.company || data.position || data.status || data.salary) {
    const newUpdate = await job.findOneAndUpdate(
      {
        _id: data.jobId,
        createdBy: data.userId,
      },
      { $set: { ...data } }
    );
    return newUpdate;
  }
};

/**
 * this function deletes a job from the database
 * @param userId user id
 * @param jobId job id
 * @returns true if job is deleted
 * @throws BadRequest if job not found
 */
export const deleteJob = async (
  userId: string | Types.ObjectId,
  jobId: string | Types.ObjectId
) => {
  const deleted = await job.findOneAndDelete({ createdBy: userId, _id: jobId});
  if (!deleted) throw new createHttpError.BadRequest("job not found");
  return true
};

export const filterJobs = async( query: queryType) => {
  const { company, position, status, salary, page, limits } = query;
  const queryObject: queryType = {};
  if (company) queryObject.company = company;
  if (position) queryObject.position = position;
  if (status) queryObject.status = status;
  if (salary){
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte'
    }
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    const filter = (salary as string).replace(regEx, (matched) => `-${operatorMap[matched]}-`);
    filter.split(',')
    .forEach((item) => {
      const [field, operator, value] = item.split('-');
      queryObject[field] = { [operator]: Number(value) };
    });
  }
  let result = job.find(queryObject);
  const pages = Number(page) || 1
  const limit = Number(limits) || 20
  const skip = (pages - 1) * limit
  result = result.skip(skip).limit(limits)
  const product = await result
  return product;
}

export default { 
  saveJob, 
  getJobs, 
  findAllJobsByUser, 
  findJobById, 
  updateJob,
  deleteJob,
  filterJobs
};
