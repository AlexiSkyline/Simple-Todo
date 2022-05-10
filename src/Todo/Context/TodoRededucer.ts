import { TodoState, Todo } from '../Interfaces/Interfaces';

type TodoAction = 
    | { type: 'addTodo', payload: Todo }
    | { type: 'toggleTodo', payload: { id: string } }

export const TodoReducer = ( state: TodoState, action: TodoAction ) => {
    switch ( action.type ) {
        
        default:
            return state;
    }
}