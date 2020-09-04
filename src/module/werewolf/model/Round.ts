import Vote from './Vote'
import Member from './Member'

// 回合
class Round {
  id: number

  // 投票
  vote?: Vote
  
  // 狼杀
  wolfKill?: Member

  // 救人
  rescued?: Member

  // 毒杀
  poisoned?: Member

  constructor(partial: Partial<Round>) {
    // this.id = Math.random()
    Object.assign(this, partial)
  }
}

export default Round