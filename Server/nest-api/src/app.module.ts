import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScriptModule } from './script/script.module';
import { ContainerController } from './container/container.controller';
import { ContainerModule } from './container/container.module';

@Module({
  imports: [ScriptModule, ContainerModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
