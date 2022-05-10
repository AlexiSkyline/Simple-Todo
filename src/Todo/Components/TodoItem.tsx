// import { useContext } from 'react';
// import { TodoContext } from '../Context/TodoContext';
import { Todo } from '../Interfaces/Interfaces';
import { useTodos } from '../Hooks/useTodos';

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props ) => {
    // const { toggleTodo } = useContext( TodoContext );
    const { toggleTodo } = useTodos();

    // const handleDbClick = () => {
    //     toggleTodo( todo.id );
    // }
    
    return (
        <li 
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : ''
            }}
            // onDoubleClick={ handleDbClick }
            onDoubleClick={ () => toggleTodo( todo.id ) }
        >
            { todo.desc }
        </li>
    );
}