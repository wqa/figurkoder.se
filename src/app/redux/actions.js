import ActionTypes from "./actionTypes"

const Actions = {
	startGame() {
		return {
			type: ActionTypes.START_GAME,
		}
	},
	setInterval(interval) {
		return {
			type: ActionTypes.SET_INTERVAL,
			interval: interval,
		}
	},
}

export default Actions
