import { Connection } from 'mongoose';
import {ScriptSchema} from "./script.schema";

export const ScriptProvider = [
    {
        provide: 'SCRIPT_MODEL',
        useFactory: (connection: Connection) => connection.model('Script', ScriptSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
