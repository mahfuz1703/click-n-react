import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Task from './contexts/Task';
import Board from './contexts/Board';
import List from './contexts/List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Board>
    <List>
      <Task>
        <App />
      </Task>
    </List>
  </Board>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
