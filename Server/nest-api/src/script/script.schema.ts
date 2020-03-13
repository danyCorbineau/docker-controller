import * as mongoose from 'mongoose';

export const ScriptSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        index: true
    },
    ext: String,
    createdAt: {
        type: Date,
        default: function() {
            return this.name == "" ? null : Date.now();
        }
    },
    content: String,
});
