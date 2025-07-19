export const taskReducer = (tasks = [], action) => {
    /* 
        list = {
            id,
            title,
            listId: number,
            boardId: number
        }
    */

    switch (action.type) {
        case 'CREATE_TASK': {
            const newTask = {
                id: Date.now(),
                title: action.payload.title,
                listId: action.payload.listId,
                boardId: action.payload.boardId
            };
            return [...tasks, newTask];
        }

        case 'UPDATE_TASK': {
            return tasks.map(task => {
                if (task.id === action.payload.id) {
                    task.title = action.payload.title;
                    return task;
                }
                return task;
            });
        }

        case 'DELETE_TASK': {
            return tasks.filter(task => task.id !== action.payload);
        }

        case 'CHANGE_LIST_ID': {
            return tasks.map(task => {
                if (task.id === action.payload.taskId) {
                    task.listId = action.payload.listId;
                    return task;
                }
                return task;
            });
        }

        case 'CHANGE_BOARD_ID': {
            return tasks.map(task => {
                if (task.id === action.payload.taskId) {
                    task.boardId = action.payload.boardId;
                    return task;
                }
                return task;
            });
        }

        default: {
            return tasks;
        }
    }
}