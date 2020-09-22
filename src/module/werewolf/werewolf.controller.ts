import { Controller, Get, Headers, Post, Body } from '@nestjs/common';
import { WerewolfService } from './werewolf.service';
import { Room } from './entity/Room';

@Controller('werewolf')
export class WerewolfController {
  constructor(private readonly wereWolfService: WerewolfService) {}

  @Get('hello')
  getHello(@Headers('Cookie') cookie: string): string {
    console.log('get cookies', cookie)
    return this.wereWolfService.getHello();
  }

  @Post('rooms')
  async createHome(@Body() room: Room) {
    await this.wereWolfService.saveRoom(room)
  }
}
