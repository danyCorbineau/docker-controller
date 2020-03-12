import * as mongoose from 'mongoose';

export const ContainerSchema = new mongoose.Schema({
    unique_id: String,
    status: Boolean,
    scripts: {id:mongoose.Types.ObjectId, ref: String},
});

// module.exports = mongoose.model('containers', ContainerSchema, 'containers')