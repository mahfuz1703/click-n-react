import './App.css';
import { useState, useContext} from 'react';
import { BoardContext } from './contexts/Board';

function App() {
  const {boards, dispatchBoardAction } = useContext(BoardContext);
  const [boardTitle, setBoardTitle] = useState('');

  return (
    <div className="App">
      <div>
        <h1>Trello App</h1>

        <form>
          <input type="text" placeholder="Create a new board" value={boardTitle} onChange={(event) => setBoardTitle(event.target.value)} />
          <button type="submit" onClick={(event) => {
            event.preventDefault();
            dispatchBoardAction({ type: 'CREATE_BOARD', payload: { title: boardTitle } });
            setBoardTitle('');
          }}>Create Board</button>
        </form>

        <ul>
          {boards.map(board => (
            <li key={board.id}>
              <h2>{board.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
