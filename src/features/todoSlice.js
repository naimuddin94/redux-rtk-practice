import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
      {id:1, text: "my first note"}
  ],
  status: "idle",
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
        const finedTodo = state.todos.find((todo) => todo.id === action.payload.id);
        finedTodo.
        
    },
  },
});
