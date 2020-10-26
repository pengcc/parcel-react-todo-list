import React, { useReducer } from 'react';

import TodoView from './TodoView';
import TodosReducer from './TodoReducer';
import { TodoContext } from './TodoContext';

export default () => {
    const initialState = {todos: []};
    const [state, dispatch] = useReducer(TodosReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            <TodoView />
        </TodoContext.Provider>
    )
}