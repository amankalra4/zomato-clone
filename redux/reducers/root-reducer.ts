import { CombinedState, combineReducers, Reducer } from "redux";
import firstReducer, { IFirstReducer } from "./first-reducer";

export type CombinedReducer = CombinedState<{ first: IFirstReducer }>;

export type IRootReducer = Reducer<CombinedReducer, any>;

const rootReducer: IRootReducer = combineReducers({
    first: firstReducer
});

export default rootReducer;
