export const ActionTypesGame = {
  START_GAME: 'START_GAME',
  PAUSE_GAME: 'PAUSE_GAME',
  STOP_GAME: 'STOP_GAME',
  SHOW: 'SHOW',
  NEXT: 'NEXT',
}

export const ActionTypesSettings = {
  RESET: 'RESET',
  SET_INTERVAL: 'SET_INTERVAL',
  SET_BEGIN: 'SET_BEGIN',
  SET_END: 'SET_END',
  SET_PRACTICE: 'SET_PRACTICE',
}

const ActionTypes = Object.assign({}, ActionTypesGame, ActionTypesSettings)

export default ActionTypes
