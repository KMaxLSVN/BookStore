import { alertConstants } from "../types/ActionsTypes";
import { alertAction } from "../actions/alert.actions";

const initState = {
	type: '',
	message: ''
}

export type AlertState = typeof initState;

const AlertRudecer = (state: AlertState = initState, action: alertAction) => {
	switch (action.type) {
		case alertConstants.SUCCESS:
			return {
				type: "alert-success",
				message: action.message
			};
		case alertConstants.ERROR:
			return {
				type: "alert-danger",
				message: action.message
			};
		case alertConstants.CLEAR:
			return state;
		default:
			return state;
	}
}

export default AlertRudecer;