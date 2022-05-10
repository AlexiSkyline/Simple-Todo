import { useContext } from 'react';
import { Todo } from '../Interfaces/Interfaces';
import { TodoContext } from '../Context/TodoContext';

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props ) => {
    const { toggleTodo } = useContext( TodoContext );

    const handleDbClick = () => {
        toggleTodo( todo.id );
    }
    
    return (
        <li 
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : ''
            }}
            onDoubleClick={ handleDbClick }
        >
            { todo.desc }
        </li>
    );
}