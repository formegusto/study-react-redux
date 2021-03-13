import { CounterActions } from "./actions";
import { CounterStore, counterStore } from "./store";
import { DECREMENT, INCREMENT } from "./types";

export default function counter(state : CounterStore = counterStore, action : CounterActions): CounterStore{
    switch(action.type) {
        case INCREMENT :
            return {
                ...state,
                number: state.number + 1
            };
        case DECREMENT :
            return {
                ...state,
                number: state.number - 1
            };
        default :
            return state;
    }
}