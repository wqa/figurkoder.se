const InitialState = () => {
	return {
		game: {
			data: [],
			result: [],
			timestamp: 0,
			elapsedTime: 0,
			countdown: 5,
			currentPair: 0,
			hidden: true,
			status: 'stop',
			hasBeenPaused: false,
		},
		settings: {
			begin: 0,
			end: 9,
			interval: 6,
			practice: false,
		},
	}
}

export default InitialState
