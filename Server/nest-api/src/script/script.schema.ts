import * as mongoose from 'mongoose';

export const ScriptSchema = new mongoose.Schema({
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
    content: Buffer,
});
