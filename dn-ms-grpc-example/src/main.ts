import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

const logger = new Logger('Main');
const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    // TODO: set omer used port to make mapping easier
    url: `0.0.0.0:${process.env.port || 8080}`,
    protoPath: join(__dirname, '../src/app.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => {
    logger.log('Microservice is listening...');
  });
}

bootstrap();
