import React from 'react';
import styled from 'styled-components';
import TodosItem from './item/TodosItem';

function TodosComponent() {
    return <TodosBlock>
        <TodosHeader>
            Redux Todos
        </TodosHeader>
        <TodosBody>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item, idx) => 
                <TodosItem key={idx} />
            )}
        </TodosBody>
        <TodosFooter>
            <input type="text" placeholder="할 일을 입력해주세요." />
            <button type="button">Save</button>
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
    }

    & > button {
        flex: 3;

        border: none;

        color: #FFF;
        background-color: #000;

        border-end-end-radius: 1rem;
    }
`;

export default TodosComponent;