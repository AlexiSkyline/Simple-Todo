import { TodoContext } from './TodoContext';
import { TodoState } from '../Interfaces/Interfaces';

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


   return (
       <TodoContext.Provider
          value={{}}
       >
          { children }
       </TodoContext.Provider>
   );
}