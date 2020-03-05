import { Document } from 'mongoose';

export interface Script extends Document {
    name: string;
    ext: string;
    createdAt: Date;
    content: Buffer;
}
