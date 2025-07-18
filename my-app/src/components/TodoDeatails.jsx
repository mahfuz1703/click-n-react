import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TodoDetails() {
    const { id } = useParams();
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(data => {
                setTodo(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching todo: {error.message}</p>;

    return (
        <div className='App'>
            <h1>Details about todo</h1>
            <Link to="/todos">Go back to Todos</Link>

            {todo ? (
                <div>
                    <h2>{todo.title}</h2>
                    <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
                    <p>User ID: {todo.userId}</p>
                    <p>Todo ID: {todo.id}</p>
                </div>
            ) : (
                <p>No todo found with ID {id}</p>
            )}
        </div>
    )
}
export default TodoDetails;