import { DECREAMENT, INCREAMENT } from "./types"

export const increament = () => ({ type : INCREAMENT });
export const decreament = () => ({ type : DECREAMENT });
export const counterActions: CounterActions = {
    increament: () => ({ type : INCREAMENT }),
    decreament: () => ({ type : DECREAMENT }),
}

export type CounterReturnType = {
    type: string;
}

export type CounterActions = {
    increament: () => CounterReturnType,
    decreament: () => CounterReturnType,
}