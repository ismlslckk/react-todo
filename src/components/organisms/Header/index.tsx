import { InnerWrapper, Wrapper } from '@/components/atoms';
import styles from './header.module.scss';
import { TodoList } from '@/pages';
import { AddTodoInput } from '@/components/molecules';

const Headerv2 = () => (
  <Wrapper>
    <InnerWrapper>
      <div className={styles.header}>
        <div>
          <div className={styles.todoHeaderText}>
            <p>T O D O</p>
          </div>
          <div>
            <AddTodoInput />
          </div>
        </div>

        <div className={styles.todoFrame}>
          <div className={styles.todoList}>
            <TodoList />
          </div>
          <div className={styles.information}>Drag and drop to reorder list</div>
        </div>

      </div>
    </InnerWrapper>
  </Wrapper>
);

export default Headerv2;
