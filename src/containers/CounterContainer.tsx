import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CounterComponent from '../components/CounterComponent';
import { RootStore } from '../store';
import { counterActions, CounterReturnType } from '../store/counter/actions';

type Props = {
    number: number;
    increament: () => CounterReturnType,
    decreament: () => CounterReturnType,
}

function CounterContainer(props: Props) {
    return <CounterComponent 
        number={props.number}
        increament={props.increament}
        decreament={props.decreament}
    />
}

export default connect(
    ({counter}: RootStore) => ({number: counter.number}),
    (dispatch) => bindActionCreators(counterActions, dispatch)
)(CounterContainer);