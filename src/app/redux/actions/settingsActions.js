import ActionTypes from "./actionTypes"

const {
	RESET_SETTINGS,
	SET_INTERVAL,
	SET_BEGIN,
	SET_END,
	SET_PRACTICE,
} = ActionTypes

const SettingsActions = {
	resetSettings: () => {
		return (dispatch, getState) => {
      dispatch({
        type: RESET_SETTINGS,
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
