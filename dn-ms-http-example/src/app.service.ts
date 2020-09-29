import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(`request for hello on service ${os.hostname()}`);
    return `Hello World! from - ${os.hostname()}`;
  }
}
