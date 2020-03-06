import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv-flow';

dotenv.config();

export const Database = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(process.env.DB),
    },
];
