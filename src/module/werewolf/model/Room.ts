import Member, { Owner } from './Member'
import Role from './Role'
import Scheduler from './Scheduler'

// 房间
class Room {

  id: number

  sits: number[]

  roles: Role[]

  members?: Member[]

  // 房主
  ownerUserId?: string

  // 调度器，负责调度游戏进行
  // 开始新的游戏，则创建新的scheduler即可
  scheduler: Scheduler

  constructor(sits: number[], roles: Role[]) {
    this.id = 1
    this.sits = sits
    this.roles = roles
    this.scheduler = new Scheduler()
  }

}

export default Room