import * as mongoose from 'mongoose';

export const Database = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb://localhost/docker_control'),
    },
];
