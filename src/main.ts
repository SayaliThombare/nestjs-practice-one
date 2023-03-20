import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Request, Response, NextFunction } from 'express';
import { AppModule } from './app.module';
import {join} from 'path';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Middleware works in logger one!');
  next();
}

export function LoggerTwo(req: Request, res: Response, next: NextFunction) {
  console.log('Middleware works in logger two!');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  console.log('port = ', process.env.port);
  console.log('logging = ', process.env.logging);
  app.use(logger);
  app.use(LoggerTwo);
  await app.listen(3000); 
}
bootstrap();
