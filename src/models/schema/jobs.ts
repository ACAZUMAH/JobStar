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
    createdBy:{
        type: Types.ObjectId,
        ref: 'User',
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

const Job = model('Jobs', jobSchema);
export default Job;