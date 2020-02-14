import { Model } from 'mongoose';
import {Injectable, Inject} from '@nestjs/common';
import * as mongoose from 'mongoose';
import { Script } from "./script.interface";

@Injectable()
export class ScriptService {
    constructor(
        @Inject('SCRIPT_MODEL')
        private readonly scriptModel: Model<Script>,
    ) {}

    async findAll(): Promise<Script[]> {
        return this.scriptModel.find().exec();
    }

    async create(script: Script): Promise<Script> {
        const createdScript = new this.scriptModel(script);
        return createdScript.save();
    }

    async update() {
        return 'Not yet implemented';
    }

    async delete() {
        return 'Not yet implemented';
    }
}
