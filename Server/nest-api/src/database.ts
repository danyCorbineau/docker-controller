import * as mongoose from 'mongoose';

export const Database = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb://dany-corbineau.fr:27018'),
    },
];
