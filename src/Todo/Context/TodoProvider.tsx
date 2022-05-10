import { useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { TodoState } from '../Interfaces/Interfaces';
import { TodoReducer } from './TodoReducer';

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'Hacer la tarea',
      completed: false
    },
    {
      id: '2',
      desc: 'Hacer un proyecto',
      completed: false
    }
  ],
  completed: 0,
  pending: 2
}


interface props {
    children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props ) => {
  const [ todoState, dispatch ] = useReducer( TodoReducer, INITIAL_STATE );

  const toggleTodo = ( id: string ): void => {
    dispatch({ type: 'toggleTodo', payload: { id }});
  }

  return (
    <TodoContext.Provider
      value={{ 
        todoState,
        toggleTodo
      }}
    >
      { children }
    </TodoContext.Provider>
  );
}