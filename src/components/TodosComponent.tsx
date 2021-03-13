import React from 'react';
import styled from 'styled-components';
import { TodoItem } from '../store/todos/types';
import TodosItem from './item/TodosItem';

type Props = {
    todos: TodoItem[];
    onInsert: () => void;
    onDelete: (idx: number) => void;
    onUpdate: (idx: number) => void;
    content: string;
    onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TodosComponent(props: Props) {
    return <TodosBlock>
        <TodosHeader>
            Redux Todos
        </TodosHeader>
        <TodosBody>
            {props.todos.map((item, idx) => 
                <TodosItem 
                    todo={item}
                    idx={idx}
                    key={idx} 
                    onDelete={props.onDelete}
                    />
            )}
        </TodosBody>
        <TodosFooter>
            <input type="text" placeholder="할 일을 입력해주세요." onChange={props.onChangeContent} value={props.content}/>
            <button type="button" onClick={props.onInsert}>Save</button>
        </TodosFooter>
    </TodosBlock>
}

const TodosBlock = styled.div`
    width: 500px;
    height: 500px;

    display: flex;
    flex-direction: column;

    border: 1px solid #000;
    border-radius: 1rem;
`;

const TodosHeader = styled.div`
    width: 100%;
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #000;
    font-size: 1.5rem;
`;

const TodosBody = styled.div`
    width: 100%;
    flex: 4;

    overflow-y: scroll;

    & > div:not(:last-child) {
        border-bottom: 1px solid #000;
    }
`;

const TodosFooter = styled.div`
    flex: 1;

    display: flex;

    & > input {
        flex: 7;

        border: none;
        margin: 1rem 0;

        padding: 0 .5rem;
        box-sizing: border-box;
    }

    & > button {
        flex: 3;

        border: none;

        color: #FFF;
        background-color: #000;

        border-end-end-radius: 1rem;

        cursor: pointer;
    }
`;

export default TodosComponent;