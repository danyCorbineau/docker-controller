import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScriptModule } from './script/script.module';

@Module({
  imports: [ScriptModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
