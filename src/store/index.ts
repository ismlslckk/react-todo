import { Middleware, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import todoSlice from '@/features/todo/todoSlice';
import { Todo } from '@/types';

const setLocalStorage = (list:Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(list));
};

const localStorageRepositoryMiddleware: Middleware = ({ getState }) => (next:any) => (action:any) => {
  const { todoState } = getState();
  setLocalStorage(todoState.todos);
  const returnValue = next(action);
  return returnValue;
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
