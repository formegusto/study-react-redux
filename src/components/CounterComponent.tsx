import React  from 'react';
import { CounterReturnType } from '../store/counter/actions';

type Props = {
    number: number;
    increament: () => CounterReturnType,
    decreament: () => CounterReturnType,
}

function CounterComponent(props: Props) {
    return (
        <>
            <h1>{props.number}</h1>
            <button onClick={props.increament}>+</button>
            <button onClick={props.decreament}>-</button>
        </>
    );
}

export default CounterComponent;