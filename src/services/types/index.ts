import { Types } from "mongoose";

declare global {
    namespace Express {
        interface Request {
            user?: jwtpayload | any;
        }
    }
}

export interface user {
    name: string;
    email: string;
    password: string;
}

export interface jwtpayload {
    _id: string | Types.ObjectId;
    email: string;
}

export interface job {
    company: string;
    position: string;
    status: string;
    createdBy: string | Types.ObjectId;
    createdAt: Date;
}

export {};