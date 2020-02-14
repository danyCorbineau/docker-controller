import { Document } from 'mongoose';

export interface Script extends Document {
    readonly meta: {
        name: string,
        ext: string,
        createdAt: Date
    };
    readonly script: Buffer;
}
