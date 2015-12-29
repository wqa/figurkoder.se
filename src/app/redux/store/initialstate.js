const InitialState = () => {
	return {
		game: {
			data: [],
			currentPair: 0,
			hidden: true,
			status: 'stop',
			result: [],
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
