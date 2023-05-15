import { useEffect, useState } from 'react';
import styles from './todoitem.module.scss';
import { remove, toggleCompleted } from '@/features/todo/todoSlice';
import { useAppDispatch } from '@/store';
import { Todo } from '@/types';
import Button from '@/components/atoms/Button';
import Checkbox from '../Checkbox';
import { Input } from '@/components/atoms';

const TodoItem = (props:any) => {
  const [completed, setCompleted] = useState(false);
  const { todo = {} as Todo } = { ...props };

  const dispatch = useAppDispatch();

  const handleCompletedChange = (event:any) => {
    setCompleted(event.target.checked);
    dispatch(toggleCompleted(todo));
  };

  const handleRemoveItemClick = () => {
    dispatch(remove(todo));
  };

  useEffect(() => {
    setCompleted(todo.completed);
  }, []);

  return (
    <div className={styles.todoItemDiv}>
      <div className={styles.todoItemCheckboxDiv}>
        <Checkbox
          name="completed"
          value={completed}
          checked={completed}
          id={todo.id}
          onChange={handleCompletedChange}
        />
      </div>
      <div className={styles.todoItemInputDiv}>

        {!completed && (<Input value={todo.title} readOnly className={styles.todoInputText} />)}
        {completed && (
        <span className={styles.todoItemTextDecoration}>
          <Input value={todo.title} readOnly className={styles.todoInputText} />
        </span>
        )}
      </div>
      <div className={styles.todoItemRemove}>
        <Button className={styles.removeButton} onClick={() => handleRemoveItemClick()}>X</Button>
      </div>

    </div>
  );
};

export default TodoItem;
