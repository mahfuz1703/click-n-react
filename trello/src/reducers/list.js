export const listReducer = (lists = [], action) => {
    /* 
        list = {
            id,
            title,
            tasks: [],
            boardId: number
        }
    */

    switch (action.type){
        case 'CREATE_LIST': {
            const newList = {
                id: Date.now(),
                title: action.payload.title,
                tasks: action.payload.tasks || [],
                boardId: action.payload.boardId
            };
            return [...lists, newList];
        }

        case 'UPDATE_LIST': {
            return lists.map(list => {
                if (list.id === action.payload.id){
                    list.title = action.payload.title;
                    return list;
                }
                return list;
            });
        }

        case 'DELETE_LIST': {
            return lists.filter(list => list.id !== action.payload);
        }

        case 'ADD_TASK_ID_TO_LIST': {
            return lists.map(list => {
                if (list.id === action.payload.listId){
                    list.tasks.push(action.payload.taskId);
                    return list;
                }
                return list;
            });
        }

        case 'REMOVE_TASK_ID_FROM_LIST': {
            return lists.map(list => {
                if (list.id === action.payload.listId){
                    list.tasks = list.tasks.filter(taskId => taskId !== action.payload.taskId);
                    return list;
                }
                return list;
            });
        }

        case 'CHANGE_BOARD_ID': {
            return lists.map(list => {
                if (list.id === action.payload.listId){
                    list.boardId = action.payload.boardId;
                    return list;
                }
                return list;
            });
        }

        default: {
            return lists;
        }
    }
}