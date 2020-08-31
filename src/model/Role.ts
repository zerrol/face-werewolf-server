
// 角色，狼，女巫等
class Role {
  symbol: Symbol  

  constructor() {
    this.symbol = Symbol.for('wolf') 
  }
}

export default Role