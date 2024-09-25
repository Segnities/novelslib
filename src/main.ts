import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4178);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
