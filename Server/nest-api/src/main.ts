import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv-flow';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log("starting port : "+process.env.PORT);
  console.log("starting DB : "+process.env.DB);
  await app.listen(process.env.PORT);
}
bootstrap();
