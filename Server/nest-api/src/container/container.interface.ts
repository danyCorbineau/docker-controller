import { Document } from 'mongoose';

export interface Container extends Document {
    unique_id: string;
    status: boolean;
    scripts: any;
}
