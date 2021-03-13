import { combineReducers } from "redux";
import counter from './counter/reducer';
import { CounterStore } from "./counter/store";

export default combineReducers<RootStore> ({
    counter
});

export type RootStore = {
    counter: CounterStore
}