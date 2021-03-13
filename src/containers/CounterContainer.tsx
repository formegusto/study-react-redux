import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CounterComponent from '../components/CounterComponent';
import { RootStore } from '../store';
import { counterActions } from '../store/counter/actions';

type Props = {
    number: number;
    CounterActions: typeof counterActions
}

function CounterContainer(props: Props) {
    const onIncrement = useCallback(() => {
        props.CounterActions.increment();
    }, [props.CounterActions]);
    
    const onDecrement = useCallback(() => {
        props.CounterActions.decrement();
    }, [props.CounterActions]);

    return <CounterComponent 
        number={props.number}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
    />
}

export default connect(
    ({counter}: RootStore) => ({number: counter.number}),
    (dispatch) => ({CounterActions : bindActionCreators(counterActions, dispatch)})
)(CounterContainer);