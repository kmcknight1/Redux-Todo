import { ADD_NEW_TODO } from "../actions";

const initialState = {
  todos: [
    {
      value: "Finish the List",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      const newTodo = { value: action.payload, completed: false };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
};
