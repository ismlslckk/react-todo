import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  Todo, TodoType,
} from '@/types';
import { clearCompleted, setSelectedTodoType, updateTodoList } from '@/features/todo/todoSlice';
import styles from './todolist.module.scss';
import { TodoItem } from '@/components/molecules';
import { Button } from '@/components/atoms';
import { reorder } from '@/utils';

const TodoList = () => {
  const todoState = useAppSelector((state) => state.todoState);
  const { todos, selectedTodoType } = todoState;

  const dispatch = useAppDispatch();

  const listedRecords = selectedTodoType === TodoType.ALL ? todos : todos.filter((item: Todo) => item.completed === (selectedTodoType === TodoType.COMPLETED));

  /**
   *
   */
  const listAllRecors = () => {
    dispatch(setSelectedTodoType(TodoType.ALL));
  };

  /**
   *
   */
  const listActiveRecors = () => {
    dispatch(setSelectedTodoType(TodoType.ACTIVE));
  };

  /**
   *
   */
  const listCompletedRecors = () => {
    dispatch(setSelectedTodoType(TodoType.COMPLETED));
  };

  /**
   *
   */
  const clearCompletedHandle = () => {
    dispatch(clearCompleted());
    dispatch(setSelectedTodoType(TodoType.ACTIVE));
  };

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    const items = reorder(listedRecords, source.index, destination.index) as Array<Todo>;
    dispatch(updateTodoList(items));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable key="draggable-todo-list" droppableId="draggable-todo-list">
        {(provided: any) => (
          <div>
            <div
              className={styles.todoListBody}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {listedRecords.map((item: any, index: any) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(providedInner: any) => (
                    <div
                      ref={providedInner.innerRef}
                      {...providedInner.draggableProps}
                      {...providedInner.dragHandleProps}
                    >
                      <TodoItem key={item.id} todo={item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
            <div className={styles.footer}>
              <span className={styles.leftItemCount}>{`${listedRecords.length} items left`}</span>
              <Button className={classNames(styles.clickable, { [`${styles.selectedItem}`]: selectedTodoType === TodoType.ALL })} onClick={listAllRecors} type="button">All</Button>
              <Button className={classNames(styles.clickable, { [`${styles.selectedItem}`]: selectedTodoType === TodoType.ACTIVE })} onClick={listActiveRecors} type="Button">Active</Button>
              <Button className={classNames(styles.clickable, { [`${styles.selectedItem}`]: selectedTodoType === TodoType.COMPLETED })} onClick={listCompletedRecors} type="Button">Completed</Button>
              <Button onClick={clearCompletedHandle} type="button" className={styles.clickable}>Clear Completed</Button>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
