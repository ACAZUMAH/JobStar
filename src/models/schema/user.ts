import { Schema, model } from 'mongoose';
import { hashPassword } from '../../services/utils/hash';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlentgh: 3,
        maxLength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.pre('save', async function(){
    if(this.isModified('password')){
        this.password = await hashPassword(this.password);
    }
})

const User = model('User', userSchema);
export default User;