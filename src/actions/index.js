export const ADD_TODO = "AddTodo";
export const REMOVE_TODO = "RemoveTodo";
export const TO_IN_PROGRESS = "ToInProgress";
export const TO_DONE = "ToDone";

let todoId = 1;

export const addTodo = (todo) => {
  return { type: ADD_TODO, payload: { ...todo, status: "Todo", id: todoId++ } };
};

export const removeTodo = (id) => {
  return { type: REMOVE_TODO, payload: id };
};

export const toInProgress = (id) => {
  return { type: TO_IN_PROGRESS, payload: id };
};

export const toDone = (id) => {
  return { type: TO_DONE, payload: id };
};
