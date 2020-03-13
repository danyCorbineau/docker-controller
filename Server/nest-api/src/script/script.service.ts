import { Model } from 'mongoose';
import {Injectable, Inject} from '@nestjs/common';
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

    async checkUniqueName(name) {
        return this.scriptModel.find({name: name});
    }

    // async findOne(id: any): Promise<Script> {
    //     return 'Not yet implemented';
    // }

    async update(id, script: Script) {
        console.log(script);
        return this.scriptModel.updateOne({id: id}, script);
    }

    async delete(id: any) {
        return this.scriptModel.findByIdAndDelete(id);
    }
}
