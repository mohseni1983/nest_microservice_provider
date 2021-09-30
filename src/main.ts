import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { Logger } from '@nestjs/common';

const logger=new Logger('Main')
const microserviceOptions:MicroserviceOptions={
  transport: Transport.TCP,
  options:{
    host:'localhost',
    port:9922
  }
}
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule
    ,microserviceOptions
    );
  app.listen().then(()=>{
    logger.log('Microservice is listening...')
  })
}
bootstrap();
