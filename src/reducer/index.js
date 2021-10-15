import { ADD_TODO, REMOVE_TODO, TO_DONE, TO_IN_PROGRESS } from "../actions";

export { ADD_TODO, TO_DONE, TO_IN_PROGRESS, REMOVE_TODO } from "../actions/index";

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TO_DONE:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, status: "Done" };
        }
        return { ...todo };
      });
    case TO_IN_PROGRESS:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, status: "InProgress" };
        }
        return { ...todo };
      });
    default:
      return state;
  }
};

export default todos;
