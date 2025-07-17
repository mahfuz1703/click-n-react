import './App.css';
import { useState, useReducer } from 'react';
import { counterReducer, initState } from './reducers/counterReducer';

function App() {
  const [todos, setTodos] = useState([]);

  // for counter app using useReducer
  const [counter, dispatch] = useReducer(counterReducer, initState);

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

      <hr />

      <h1>Counter app using useReducer</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>+10</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>-1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}>-5</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>-10</button>
    </div>
  );
}

export default App;
