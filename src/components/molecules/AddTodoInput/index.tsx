import { useState } from 'react';
import { add } from '@/features/todo/todoSlice';
import { useAppDispatch } from '@/store';
import { Todo } from '@/types';
import styles from './addtodoinput.module.scss';
import Input from '@/components/atoms/Input';
import Checkbox from '../Checkbox';

const AddTodoInput = () => {
  const [titleInput, setTitleInput] = useState('');
  const [completed, setCompleted] = useState(false);

  const dispatch = useAppDispatch();

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    setTitleInput('');
    setCompleted(false);
    const todo = { title: titleInput, completed: completed } as Todo;
    dispatch(add(todo));
  };

  const handleTitle = (e:any) => {
    setTitleInput(e.target.value);
  };

  const handleChange = (e:any) => {
    setCompleted(e.target.checked);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className={styles.addTodoDiv}>
        <div className={styles.addTodoCheckboxDiv}>
          <Checkbox
            value={completed}
            checked={completed}
            onChange={handleChange}
          />
        </div>
        <div className={styles.addTodoInputDiv}>
          <Input
            placeholder="type something and press enter"
            value={titleInput}
            onChange={handleTitle}
            className={styles.addTodoInputText}
          />
        </div>
      </div>
    </form>
  );
};

export default AddTodoInput;
