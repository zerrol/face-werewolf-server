import { Injectable } from "@nestjs/common";
import Room from "./model/Room";

@Injectable()
export class WerewolfService {

  getHello() {
    return 'hello were wolf'
  }

  createRoom(room: Room) {
    // TODO: insert 2 db 
  }
}