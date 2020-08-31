
import Round from './Round'
import Member from './Member'

class Scheduler {
  // 已进行的回合
  rounds: Round[] = []

  // 当前回合 
  curRound?: Round

  dead: Member[] = []
}

export default Scheduler