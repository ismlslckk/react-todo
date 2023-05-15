import store from '@/store';
import {
  add, remove, toggleCompleted,
  clearCompleted,
} from '@/features/todo/todoSlice';
import { Todo } from '@/types';

describe('todoSlice tests', () => {
  test('todoSlice add,remove,toggleCompleted action behaviors should be as expected ', () => {
    // step1 : add action
    store.dispatch(add({ completed: false, title: 'test1' } as Todo));
    store.dispatch(add({ completed: false, title: 'test2' } as Todo));

    let { todos } = store.getState().todoState;

    expect(todos.length).toEqual(2);

    // step2 : remove action
    store.dispatch(remove(todos[0]));
    todos = store.getState().todoState.todos;
    expect(todos.length).toEqual(1);

    // step3 : completed action
    store.dispatch(toggleCompleted(todos[0]));
    todos = store.getState().todoState.todos;
    const secondTodoItem = todos.find((todo:Todo) => todo.title === 'test2') || {} as Todo;
    expect(secondTodoItem.completed).toEqual(true);

    // step4 : clear Completed action
    store.dispatch(clearCompleted());
    todos = store.getState().todoState.todos;
    expect(todos.length).toEqual(0);
  });
});
