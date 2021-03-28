import { Injectable } from "@nestjs/common";
import { Room } from "../../entity/Room.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}


  getHello() {
    return 'hello were wolf'
  }

  async saveRoom(room: Room) {
    // TODO: insert 2 db 
    await this.roomRepository.save(room) 
  }
}