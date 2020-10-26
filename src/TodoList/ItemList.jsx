import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import { Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

const ItemList = () => {
    const { state, dispatch } = useContext(TodoContext);
    const { todos } = state;
    console.log({state})
    return todos.map((item, idx) => {
        return (
            <p key={idx}>
                {item}
                <Button onClick={() => dispatch({ type: 'delete', idx})}>
                    <DeleteFilled />
                </Button>
            </p>
        );
    });
};

export default ItemList;
