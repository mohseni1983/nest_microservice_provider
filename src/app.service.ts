import { Injectable, Logger } from '@nestjs/common';
import { MessageDto } from './message.dto';

@Injectable()
export class AppService {
  private logger=new Logger('Provider');
  
  getHello(message:MessageDto): string {
    this.logger.log('Provider is answering')
    return `Hello ${message.name} ${message.family}`;
  }
  getHello2(message:string): string {
    this.logger.log('Provider is answering')
    return `hi ${message}`;
  }
}
