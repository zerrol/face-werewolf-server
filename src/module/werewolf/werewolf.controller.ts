import { Controller, Get, Headers } from '@nestjs/common';
import { WerewolfService } from './werewolf.service';

@Controller('werewolf')
export class WerewolfController {
  constructor(private readonly wereWolfService: WerewolfService) {}

  @Get('hello')
  getHello(@Headers('Cookie') cookie: string): string {
    console.log('get cookies', cookie)
    return this.wereWolfService.getHello();
  }
}
