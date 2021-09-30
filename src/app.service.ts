import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger=new Logger('Provider');
  
  getHello(message:string): string {
    this.logger.log('Provider is answering')
    return `Hello ${message}`;
  }
  getHello2(message:string): string {
    this.logger.log('Provider is answering')
    return `hi ${message}`;
  }
}
