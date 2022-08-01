import { createSelector } from '@reduxjs/toolkit';

export const getTodos = state => state.todos.items;

export const getFilteredTodos = (items, query) => {
    return items.filter(({todo}) => 
    todo.toLowerCase().includes(query.toLowerCase()))   
};

export const getCreatedTodos = createSelector(
  [getTodos], (items) => {
  return items.filter((todo) => (!todo.completed))
  },
);

export const getCompletedTodoCount = createSelector([getTodos], items => {
    return items.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
  });

export const getCompletedTodo = createSelector([getTodos], items => {
  return items.filter((todo) => (todo.completed))
});