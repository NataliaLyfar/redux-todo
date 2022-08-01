import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction('todos/add', todo => ({
    payload: {
        id: nanoid(),
        todo,
        completed: false,
    },
}));

export const deleteTodo = createAction('todos/delete');

export const toggleCompleted = createAction('todos/toggleCompleted');

