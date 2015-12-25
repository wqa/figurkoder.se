import Constants from "./constants"

const Actions = {
	startGame() {
		return {
			type: Constants.START_GAME,
		}
	},
	setInterval(interval) {
		return {
			type: Constants.SET_INTERVAL,
			interval: interval,
		}
	},
}

export default Actions
