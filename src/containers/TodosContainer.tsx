import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodosComponent from '../components/TodosComponent';
import { RootStore } from '../store';
import { todoActions } from '../store/todos/actions';
import { TodoItem } from '../store/todos/types';

type Props = {
    todos: TodoItem[];
    TodoActions: typeof todoActions;
};

function TodosContainer(props: Props) {
    return <TodosComponent />;
}

export default connect(
    ({todo}: RootStore) => ({todos: todo.todos}),
    (dispatch) => ({TodoActions : bindActionCreators(todoActions, dispatch)})
)(TodosContainer);