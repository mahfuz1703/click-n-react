import {createContext, useReducer} from 'react'
import { boardReducer } from '../reducers/board'; 

export const BoardContext = createContext();

function Board(children) {
  const [boards, dispatchBoardAction] = useReducer(boardReducer, []);
  return (
    <BoardContext.Provider value={{boards, dispatchBoardAction}}>
        {children.children}
    </BoardContext.Provider>
  )
}

export default Board