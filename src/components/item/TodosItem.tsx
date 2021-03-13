import React from 'react';
import styled from 'styled-components';
import { FiDelete } from 'react-icons/fi';
import { TodoItem } from '../../store/todos/types';

type Props = {
    idx: number;
    todo: TodoItem;
    onDelete: (idx:number) => void;
}

function TodosItem(props: Props) {
    return <ItemBlock>
        <div>{props.idx}</div>
        <div>{props.todo.content}</div>
        <div onClick={() => props.onDelete(props.idx)}><FiDelete size={32}/></div>
    </ItemBlock>
}

const ItemBlock = styled.div`
    display: flex;
    flex-wrap: nowrap;

    height: 50px;

    & > div{
        display: flex;
        align-items: center;
    }

    /* 인덱스 */
    & > div:nth-child(1) {
        flex: 1;
        justify-content: center;
    }

    /* 내용 */
    & > div:nth-child(2) {
        flex: 8;
    }

    /* 삭제 버튼 */
    & > div:nth-child(3) {
        flex: 1;
        justify-content: center;

        cursor: pointer;
    }
`;

export default TodosItem;