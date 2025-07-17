// for counter app using useReducer
export const initState = 0; // Initial state for the counter

export const counterReducer = (state, action) => { // Reducer function to handle counter actions
  switch (action.type){
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    default:
      return state;
  }
}