import React from 'react';
import { Typography } from 'antd';
import ItemList from './ItemList';
import TodoForm from './TodoForm';

const { Title } = Typography;
export default function TodoView() {
    return (
        <>
            <Typography>
                <Title>My ToDos</Title>
            </Typography>

            <TodoForm />

            <ItemList />
        </>
    );
}