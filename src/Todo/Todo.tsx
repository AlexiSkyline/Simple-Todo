import { TodoProvider } from './Context/TodoProvider';

export const Todo = () => {
    return (
        <TodoProvider>
            <h1>Todo: </h1>
            <ul>
                <li>Todo 1</li>
                <li>Todo 2</li>
                <li>Todo 3</li>
                <li>Todo 4</li>
            </ul>
        </TodoProvider>
    );
}