export default function todosReducer(state, action) {
    const { todos } = state; 
    switch(action.type) {
        case 'add':
            return {...state, todos: [action.item, ...todos]};
        case 'delete':
            return {...state, todos: todos.filter((_,idx) => idx !== action.idx)}
        default:
            return state;
    }
}