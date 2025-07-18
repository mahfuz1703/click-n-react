import { useReducer } from 'react';
import { counterReducer, initState } from '../reducers/counterReducer';
import { Link } from 'react-router-dom';

function Counter() {
    const [counter, dispatch] = useReducer(counterReducer, initState);
    return (
        <div className='App'>
            <h1>Counter app using useReducer</h1>
            <Link to="/">Go back to Home</Link>
            <p>Counter: {counter}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>+1</button>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>+5</button>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>+10</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>-1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}>-5</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>-10</button>
        </div>
    )
}

export default Counter