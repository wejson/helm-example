import { Body, Controller, Logger, Post } from '@nestjs/common';
import { IGrpcService } from './grpc.interface';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  @Post('add')
  async accumulate(@Body('data') data: number[], @Body('target') target: string = 'localhost:8080') {
    this.logger.log('Adding ' + data.toString());
    const { options } = microserviceOptions;
    options.url = target;
    const client = ClientProxyFactory.create({ transport: Transport.GRPC, ...{ options } });
    const service = client.getService<IGrpcService>('AppController');
    return service.accumulate({ data }); // <-- to this
  }
}
