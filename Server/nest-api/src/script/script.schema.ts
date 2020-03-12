import * as mongoose from 'mongoose';
// import {ContainerSchema} from '../container/container';

export const ScriptSchema = new mongoose.Schema({
    name: String,
    ext: String,
    createdAt: {
        type: Date,
        default: function() {
            return this.name == "" ? null : Date.now();
        }
    },
    content: Buffer,
});

// let scriptModel = mongoose.model('scripts', ScriptSchema, 'scripts')
// scriptModel.getContainers = (script)=>{
//   return ContainerSchema.find({scriptId : script._id})
// }