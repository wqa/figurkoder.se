export const ActionTypesGame = {
  RESET: 'RESET',
  START_GAME: 'START_GAME',
  PAUSE_GAME: 'PAUSE_GAME',
  STOP_GAME: 'STOP_GAME',
  SET_INTERVAL: 'SET_INTERVAL',
  SET_PRACTICE: 'SET_PRACTICE',
  SHOW: 'SHOW',
  NEXT: 'NEXT',
  COUNTDOWN: 'COUNTDOWN',
}

export const ActionTypesSettings = {
  RESET: 'RESET',
  STOP_GAME: 'STOP_GAME',
  SET_INTERVAL: 'SET_INTERVAL',
  SET_BEGIN: 'SET_BEGIN',
  SET_END: 'SET_END',
  SET_PRACTICE: 'SET_PRACTICE',
}

const ActionTypes = Object.assign({}, ActionTypesGame, ActionTypesSettings)

export default ActionTypes
