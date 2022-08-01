import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { addTodo, deleteTodo, toggleCompleted } from "./todo-actions";

const items = createReducer([], {
  [addTodo]: (state, { payload }) => [...state, payload],
  [deleteTodo]: (state, { payload }) => state.filter(({id}) => id !== payload),
  [toggleCompleted]: (state, { payload }) => state.map(todo => (todo.id === payload ? {...todo, completed: !todo.completed} : todo)),
});



export default combineReducers({
  items,
});