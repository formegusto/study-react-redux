import { CounterReturnType } from "./actions";
import { CounterStore, counterStore } from "./store";
import { DECREAMENT, INCREAMENT } from "./types";

export default function counter(state : CounterStore = counterStore, action : CounterReturnType) {
    switch(action.type) {
        case INCREAMENT :
            return {
                ...state,
                number: state.number + 1
            };
        case DECREAMENT :
            return {
                ...state,
                number: state.number - 1
            };
        default :
            return state;
    }
}