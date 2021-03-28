import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entity/Room.entity';
import { RoomService } from './module/room/room.service';
import { RoomController } from './module/room/room.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  controllers: [RoomController],
  providers: [RoomService],
})
export class WerewolfModule {}
