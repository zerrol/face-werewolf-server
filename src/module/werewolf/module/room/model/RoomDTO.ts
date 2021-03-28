import Member from 'src/module/werewolf/model/Member'
import { Room } from '../../../entity/Room.entity'
import Scheduler from '../../../model/Scheduler'

// 房间
export class RoomDTO {

  // 房间的信息
  info: Room

  // 游戏成员（包括房主）
  members?: Member[]

  // 房主
  owner: Member

  // 调度器，负责调度游戏进行
  // 开始新的游戏，则创建新的scheduler即可
  scheduler: Scheduler | null = null

  constructor(info: Room) {
    this.info = info
  }

}
