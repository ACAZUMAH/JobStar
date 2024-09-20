import { connect } from "mongoose";

export const connectDB = async (url: string) => {
    return await connect(url, {
        autoIndex: true,
    })
}

export default connectDB;