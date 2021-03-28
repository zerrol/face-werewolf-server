
import Round from '../entity/Round'

enum STEP {
  CLOSE_EYE,
  RUN_FOR_CAPTIAN,
  SPEAK,
  VOTE,
}


class Scheduler {
  id: number

  roomId: number

  // 已进行的回合
  rounds: Round[] = []

  currentStep: STEP
}

export default Scheduler