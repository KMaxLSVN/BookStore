import { combineReducers, Reducer, AnyAction } from "redux";
import AlertRudecer, { AlertState } from "./alert.reducer";
import AuthenticateReducer, { AuthenticateState } from "./authentication.reducer";

export type State = {
    AlertRudecer: AlertState,
    AuthenticateReducer: AuthenticateState
}

const rootReducer: Reducer<State, AnyAction> = combineReducers<State>({
    AlertRudecer,
    AuthenticateReducer
})

export default rootReducer;