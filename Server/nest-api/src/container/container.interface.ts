import { Document } from 'mongoose';

export interface Container extends Document {
    unique_id: string;
    status: string;
    scripts: any;
    names: string[];
    image: string;
    state: string;
    ports: string[];
    created: number;
}
