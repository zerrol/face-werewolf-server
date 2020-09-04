import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @Header("Set-Cookie", "token2=mianxiaohua")
  getHello(): string {
    return this.appService.getHello();
  }
}
