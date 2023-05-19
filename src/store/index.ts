import { Middleware, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import todoSlice from '@/features/todo/todoSlice';
import { Todo } from '@/types';

const setLocalStorage = (list: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(list));
};

const localStorageRepositoryMiddleware: Middleware = (api) => (next) => (action) => {
  const result = next(action);
  const { todoState } = api.getState();
  setLocalStorage(todoState.todos);
  return result;
};

const store = configureStore({
  reducer: {
    todoState: todoSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageRepositoryMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
