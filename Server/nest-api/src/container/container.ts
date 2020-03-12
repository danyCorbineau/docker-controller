import { Connection } from 'mongoose';
import {ContainerSchema} from "./container.schema";

export const ContainerProvider = [
    {
        provide: 'CONTAINER_MODEL',
        useFactory: (connection: Connection) => connection.model('Container', ContainerSchema),
        inject: ['DATABASE_CONNECTION'],
    }
];
