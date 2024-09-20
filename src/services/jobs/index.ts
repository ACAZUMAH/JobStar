import job from "../../models/schema/jobs";
import { job as jobType } from "../../services/types";

export const saveJob = async (data: jobType) =>{
    const create = await job.create({ ...data });
    if(!create) 
        throw new Error('Job creation failed');
    return true;
}