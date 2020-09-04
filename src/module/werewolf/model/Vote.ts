import Member from './Member'

// 投票
class Vote {
  round: number

  fromMember: Member

  toMember: Member

  constructor(round: number, fromMember: Member, toMember: Member)  {
    this.round = round
    this.fromMember = fromMember
    this.toMember = toMember
  }
}

export default Vote