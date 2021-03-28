import Member from './Member'

// 投票
class Vote {
  
  roundId: number

  fromMember: Member

  toMember: Member

  constructor(roundId: number, fromMember: Member, toMember: Member)  {
    this.roundId = roundId
    this.fromMember = fromMember
    this.toMember = toMember
  }
}

export default Vote