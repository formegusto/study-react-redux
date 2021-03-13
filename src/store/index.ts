import { combineReducers } from "redux";
import counter from './counter/reducer';
import { CounterStore } from "./counter/store";

export type RootStore = {
    counter: CounterStore
}

export default combineReducers<RootStore> ({
    counter
});