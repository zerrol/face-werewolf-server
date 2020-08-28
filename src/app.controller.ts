import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @Header("Set-Cookie", "token=mianxiaohua; Domain=localhost:8080")
  getHello(): string {
    return this.appService.getHello();
  }
}
