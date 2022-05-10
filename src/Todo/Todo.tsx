import { TodoProvider } from './Context/TodoProvider';
import { TodoList } from './Components/TodoList';

export const Todo = () => {
    return (
        <TodoProvider>
            <h1>Todo: </h1>
            <TodoList />
        </TodoProvider>
    );
}