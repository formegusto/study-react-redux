import { combineReducers } from "redux";
import counter from './counter/reducer';
import todo from './todos/reducer';
import { CounterStore } from "./counter/store";
import { TodoStore } from "./todos/store";

export type RootStore = {
    counter: CounterStore;
    todo: TodoStore;
}

export default combineReducers<RootStore> ({
    counter,
    todo
});