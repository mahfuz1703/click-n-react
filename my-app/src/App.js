import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTodos([data]);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className="App">
      <h1>Learn about API fetch</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>Title: {todo.title} </span> <br />
            <span>ID: {todo.id} </span> <br />
            <span>UserID: {todo.userId} </span> <br />
            <span>Completed: {todo.completed ? 'Yes' : 'No'} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
