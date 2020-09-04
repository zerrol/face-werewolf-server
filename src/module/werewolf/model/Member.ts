import Role from './Role'

// 成员
class Member {
  id: number

  userId: number

  role?: Role

  sit: number

  constructor(userId: number, sit: number) {
    this.id = Math.random()
    this.userId = userId
    this.sit = sit
  }
}


// 房主
export class Owner extends Member {

}

export default Member