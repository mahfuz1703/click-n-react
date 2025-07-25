import {createContext, useReducer} from 'react'
import {taskReducer} from '../reducers/task'

export const TaskContext = createContext();

function Task({children}) {
  const [tasks, dispatchTaskAction] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{tasks, dispatchTaskAction}}>
        {children}
    </TaskContext.Provider>
  )
}

export default Task