const InitialState = () => {
	return {
		game: {
			data: [],
			result: [],
			timestamp: 0,
			elapsedTime: 0,
			currentPair: 0,
			hidden: true,
			status: 'stop',
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
