import { Controller, Get, Headers, Post, Body } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDTO } from './model/RoomDTO'

@Controller('werewolf')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post('rooms')
  async createHome(@Body() room: RoomDTO) {
    await this.roomService.saveRoom(room.info)
  }
}
