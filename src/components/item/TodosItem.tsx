import React from 'react';
import styled from 'styled-components';
import { FiDelete } from 'react-icons/fi';

function TodosItem() {
    return <ItemBlock>
        <div>01</div>
        <div>내용</div>
        <div><FiDelete size={32}/></div>
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