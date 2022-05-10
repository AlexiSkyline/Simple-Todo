import { useContext } from 'react';
import { TodoContext } from '../Context/TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const { todoState } = useContext( TodoContext );
    const { todos } = todoState;

    return (
        <ul>
            {
                todos.map( todo => ( <TodoItem key={ todo.id } todo={ todo } /> ))
            }
        </ul>
    );
}