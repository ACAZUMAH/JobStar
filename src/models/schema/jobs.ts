import { required } from 'joi';
import { Types,model, Schema } from 'mongoose';

export const jobSchema = new Schema({
    company:{
        type: String,
        required: true,
        maxLength: 50,
    },
    position:{
        type: String,
        required: true,
        maxLength: 100,
    },
    status:{
        type: String,
        required: true,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    salary:{
        type: Number,
        required: true,
    },
    createdBy:{
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {timestamps: true})

const Job = model('Jobs', jobSchema);
export default Job;