import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { Todo, TodoState, TodoType } from '@/types';

let initialTodos:Todo[] = [];
const localStorageTodos = localStorage.getItem('todos');
if (localStorageTodos) {
  initialTodos = JSON.parse(localStorageTodos.toString()) as Todo[];
}

const initialState: TodoState = { todos: initialTodos, selectedTodoType: TodoType.ALL };

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      if (action.payload.title) {
        const newTodo = ({ id: v4(), completed: action.payload.completed, title: action.payload.title }) as Todo;
        state.todos.push(newTodo);
      }
    },
    remove: (state, action:PayloadAction<Todo>) => {
      const findedItem = state.todos.find((item:Todo) => item.id === action.payload.id);
      if (findedItem) {
        const index = state.todos.indexOf(findedItem, 0);
        if (index > -1) {
          state.todos.splice(index, 1);
        }
      }
    },
    clearCompleted: (state) => ({
      ...state,
      todos: [...state.todos].filter((todo) => todo.completed === false),
    }),
    toggleCompleted: (state, action: PayloadAction<Todo>) => {
      const findedItem = state.todos.find((item:Todo) => item.id === action.payload.id);
      if (findedItem) {
        findedItem.completed = !findedItem.completed;
      }
    },
    setSelectedTodoType: (state, action:PayloadAction<TodoType>) => ({ ...state, selectedTodoType: action.payload }),
    updateTodoList: (state, action: PayloadAction<Array<Todo>>) => ({
      ...state,
      todos: [...action.payload],
    }),
  },
});

export default todoSlice.reducer;
export const {
  add, remove, toggleCompleted, setSelectedTodoType, clearCompleted, updateTodoList,
} = todoSlice.actions;
