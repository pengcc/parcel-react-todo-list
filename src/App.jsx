import React, { useState } from 'react';
import { Typography } from 'antd';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

const { Title } = Typography;


const App = () => {
    const [todos, setTodos] = useState([]);
    function saveTodo(todoText) {
        const trimmedText = todoText.trim();
        console.log({trimmedText})
        if (trimmedText.length > 0) {
            console.log({test: trimmedText})
            setTodos((todos) => ([...todos, trimmedText]));
        }
        console.log({todos})
    }

    function deleteTodoItem(index) {
        const toDosCopy = todos.filter((_, idx) => idx !== index);
        setTodos(toDosCopy);
    }

    return (
        <>
            <Typography>
                <Title>My ToDos</Title>
            </Typography>

            <ToDoForm saveTodo={saveTodo} />

            <ToDoList todos={todos} deleteTodoItem={deleteTodoItem} />
            {/* {
                todos.map((item, idx) => {
                    return (
                        <p key={idx}>
                            {item}
                            <Button onClick={() => { deleteTodoItem(idx) }}>
                                <DeleteFilled />
                            </Button>
                        </p>
                    );
                })
            } */}
        </>
    );
};

export default App;