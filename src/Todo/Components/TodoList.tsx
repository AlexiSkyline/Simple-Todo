// import { useContext } from 'react';
// import { TodoContext } from '../Context/TodoContext';
import { TodoItem } from './TodoItem';
import { useTodos } from '../Hooks/useTodos';

export const TodoList = () => {
    // const { todoState } = useContext( TodoContext );
    // const { todos } = todoState;
    const { todos } = useTodos();

    return (
        <ul>
            {
                todos.map( todo => ( <TodoItem key={ todo.id } todo={ todo } /> ))
            }
        </ul>
    );
}