import * as mongoose from 'mongoose';

export const ContainerSchema = new mongoose.Schema({
    unique_id: String,
    status: String,
    scripts: {id:mongoose.Types.ObjectId, ref: String},
    names: Array,
    image: String,
    state: String,
    ports: Array,
    created: Number,
});

// module.exports = mongoose.model('containers', ContainerSchema, 'containers')