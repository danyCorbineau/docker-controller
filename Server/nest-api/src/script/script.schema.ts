import * as mongoose from 'mongoose';

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
