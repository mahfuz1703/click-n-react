import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                setTodos(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='App'>
            <h1>Learn about API fetch</h1>
            <Link to="/">Go back to Home</Link>
            
            {loading && <p>Loading........</p>}
            {error && <p> Todo not found </p>}
            <ul>
                {todos.length > 0 ? (
                    todos.map(todo => (
                        <li key={todo.id}>
                            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
                        </li>
                    ))
                ) : (
                    <p>No todos available</p>
                )}
            </ul>
        </div>
    )
}

export default Todo