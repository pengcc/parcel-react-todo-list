import React from 'react';
import { Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

const ToDoList = (props) => {
    const { todos, deleteTodoItem } = props;
    return todos.map((item, idx) => {
        return (
            <p key={idx}>
                {item}
                <Button onClick={() => deleteTodoItem(idx)}>
                    <DeleteFilled />
                </Button>
            </p>
        );
    });
};

export default ToDoList;
