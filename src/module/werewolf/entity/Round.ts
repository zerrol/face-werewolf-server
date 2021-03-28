import Vote from '../model/Vote'
import Member from '../model/Member'

// 回合
class Round {
  id: number

  scheduleId: number

  // 投票
  votes?: Vote[]
  
  // 狼杀
  wolfKill?: Member

  // 救人
  isRescued?: boolean

  // 毒杀
  poisoned?: Member  

  // 警长
  captain?: Member

  constructor(partial: Partial<Round>) {
    // this.id = Math.random()
    Object.assign(this, partial)
  }
}

export default Round