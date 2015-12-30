import ActionTypes from "./actionTypes"

const {
	RESET,
	SET_INTERVAL,
	SET_BEGIN,
	SET_END,
	SET_PRACTICE,
} = ActionTypes

const SettingsActions = {
	reset: () => {
		return (dispatch, getState) => {
      dispatch({
        type: RESET,
      })
		}
	},
	setInterval: (interval) => {
		return (dispatch, getState) => {
      dispatch({
				type: SET_INTERVAL,
				interval: interval,
      })
		}
	},
	setBegin: (begin) => {
		return (dispatch, getState) => {
      dispatch({
				type: SET_BEGIN,
				begin: begin,
      })
		}
	},
	setEnd: (end) => {
		return (dispatch, getState) => {
      dispatch({
				type: SET_END,
				end: end,
      })
		}
	},
	setPractice: (practice) => {
		return (dispatch, getState) => {
      dispatch({
				type: SET_PRACTICE,
				practice: practice,
      })
		}
	},
}

export default SettingsActions
