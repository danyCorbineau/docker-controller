import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScriptModule } from './script/script.module';
import { ContainerController } from './container/container.controller';
import { ContainerModule } from './container/container.module';

let envName = '.env';
console.log('env : ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'test') {
  envName = '.env.test';
}

@Module({
  imports: [
    ScriptModule, 
    ContainerModule,
    ConfigModule.forRoot({
      envFilePath: envName
    })
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
