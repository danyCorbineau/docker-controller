import { Module } from '@nestjs/common';
import { ContainerController } from './container.controller';
import { ContainerService } from './container.service';
import { Database } from 'src/database';
import { ContainerProvider } from './container';

@Module({
    controllers: [ContainerController],
    providers: [ContainerService,
     ...Database,
     ...ContainerProvider,
    ]
})
export class ContainerModule {}
