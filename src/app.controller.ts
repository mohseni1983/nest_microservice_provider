import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('hello')
  getHello(message:string): string {
    return this.appService.getHello(message);
  }

  @MessagePattern('hi')
  getHello2(message:string): string {
    return this.appService.getHello2(message);
  }

}
