export const ADD_NEW_TODO = "ADD_NEW_TODO";

export const addNewTodo = todo => {
  return {
    type: ADD_NEW_TODO,
    payload: todo
  };
};

export const TOGGLE_TODO = "TOGGLE_TODO";

export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    payload: index
  };
};
