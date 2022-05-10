import { TodoProvider } from './Context/TodoProvider';
import { TodoList } from './Components/TodoList';
import { Title } from './Components/Title';

export const Todo = () => {
    return (
        <TodoProvider>
            <Title />
            <TodoList />
        </TodoProvider>
    );
}