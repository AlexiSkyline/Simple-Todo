import { useTodos } from '../Hooks/useTodos';

export const Title = () => {
    const { pendingTodos } = useTodos();
    
    return (
        <h1>Todo: { pendingTodos }</h1>
    );
}