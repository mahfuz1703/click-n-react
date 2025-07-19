export const boardReducer = (boards = [], action) => {

    /* 
        board = {
            id,
            title,
            createdAt,
            lists: [],
            tasks: []
        }
    */

    switch (action.type){
        case 'CREATE_BOARD':{
            const newBoard = {
                id: Date.now(),
                title: action.payload.title,
                createdAt: new Date().toLocaleString(),
                lists: action.payload.lists || [],
                tasks: action.payload.tasks || []
            };
            return [...boards, newBoard];
        }

        case 'UPDATE_BOARD':{
            return boards.map(board => {
                if (board.id === action.payload.id){
                    board.title = action.payload.title;
                    return board;
                }
                return board;
            })
        }

        case 'DELETE_BOARD':{
            return boards.filter(board => board.id !== action.payload);
        }

        case 'ADD_LIST_ID_TO_BOARD': {
            return boards.map(board => {
                if (board.id === action.payload.id){
                    board.lists.push(action.payload.listId);
                    return board;
                }
                return board;
            })
        }

        case 'REMOVE_LIST_ID_FROM_BOARD': {
            return boards.map(board => {
                if (board.id === action.payload.id){
                    board.lists = board.lists.filter(listId => listId !== action.payload.listId);
                    return board;
                }
                return board;
            })
        }

        case 'ADD_TASK_ID_TO_BOARD': {
            return boards.map(board => {
                if (board.id === action.payload.id){
                    board.tasks.push(action.payload.taskId);
                    return board;
                }
                return board;
            })
        }

        case 'REMOVE_TASK_ID_FROM_BOARD': {
            return boards.map(board => {
                if (board.id === action.payload.id){
                    board.tasks = board.tasks.filter(taskId => taskId !== action.payload.taskId);
                    return board;
                }
                return board;
            })
        }

        default: {
            return boards;
        }
    }
}