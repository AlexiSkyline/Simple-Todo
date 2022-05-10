import { Todo } from '../Interfaces/Interfaces';

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props ) => {
    const handleDbClick = () => {
        console.log( 'TodoItem: ', todo.desc );
    }
    
    return (
        <li onDoubleClick={ handleDbClick }>
            { todo.desc }
        </li>
    );
}