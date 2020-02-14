import * as mongoose from 'mongoose';

export const ScriptSchema = new mongoose.Schema({
    meta: {
        name: String,
        ext: String,
        createdAt: {
            type: Date,
            default: function() {
                if (this.name != "") {
                    return Date.now();
                }
                return null;
            }
        },
    },
    script: Buffer,
});
