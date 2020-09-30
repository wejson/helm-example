import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GrpcOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';

// Same options object used by microservice server
export const microserviceOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};
