import ActionTypes from "./actionTypes"

const SettingsActions = {
	reset: () => {
		return (dispatch, getState) => {
      dispatch({
        type: ActionTypes.RESET,
      })
		}
	},
	setInterval: (interval) => {
		return (dispatch, getState) => {
      dispatch({
				type: ActionTypes.SET_INTERVAL,
				interval: interval,
      })
		}
	},
	setBegin: (begin) => {
		return (dispatch, getState) => {
      dispatch({
				type: ActionTypes.SET_BEGIN,
				begin: begin,
      })
		}
	},
	setEnd: (end) => {
		return (dispatch, getState) => {
      dispatch({
				type: ActionTypes.SET_END,
				end: end,
      })
		}
	},
	setPractice: (practice) => {
		return (dispatch, getState) => {
      dispatch({
				type: ActionTypes.SET_PRACTICE,
				practice: practice,
      })
		}
	},
}

export default SettingsActions
