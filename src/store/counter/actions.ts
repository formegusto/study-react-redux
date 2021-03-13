import { DECREMENT, INCREMENT } from "./types"

export const counterActions = {
    increment: () => ({ type : INCREMENT }),
    decrement: () => ({ type : DECREMENT }),
}

type INCREMENT_ACTION = ReturnType<typeof counterActions.increment>;
type DECREMENT_ACTION = ReturnType<typeof counterActions.decrement>;

export type CounterActions = INCREMENT_ACTION | DECREMENT_ACTION;
