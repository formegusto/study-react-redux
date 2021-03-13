import React  from 'react';

type Props = {
    number: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

function CounterComponent(props: Props) {
    return (
        <>
            <h1>{props.number}</h1>
            <button onClick={props.onIncrement}>+</button>
            <button onClick={props.onDecrement}>-</button>
        </>
    );
}

export default CounterComponent;