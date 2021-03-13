import React, { useCallback, useState } from 'react';
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
    const [content, setContent] = useState<string>('');

    const onChangeContent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }, []);

    const onInsert = useCallback(() => {
        props.TodoActions.insert({
            content: content,
            isCheck: false
        });
    }, [props.TodoActions, content]);

    const onDelete = useCallback((idx: number) => {
        props.TodoActions.delete(idx);
    }, [props.TodoActions]);

    const onUpdate = useCallback((idx: number) => {
        props.TodoActions.update(idx);
    }, [props.TodoActions]);

    return <TodosComponent 
        content={content}
        todos={props.todos}
        onInsert={onInsert}
        onDelete={onDelete}
        onUpdate={onUpdate}
        onChangeContent={onChangeContent}
    />;
}

export default connect(
    ({todo}: RootStore) => ({todos: todo.todos}),
    (dispatch) => ({TodoActions : bindActionCreators(todoActions, dispatch)})
)(TodosContainer);