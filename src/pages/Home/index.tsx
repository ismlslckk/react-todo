import { InnerWrapper, Wrapper } from '@/components/atoms';
import styles from './home.module.scss';
import { AddTodoInput } from '@/components/molecules';
import { TodoList } from '..';

const Home = () => (
  <Wrapper>
    <InnerWrapper>
      <div className={styles.home}>
        <div className={styles.homePageFrame}>
          <div>
            <AddTodoInput />
          </div>
          <div className={styles.todoFrame}>
            <div className={styles.todoList}>
              <TodoList />
            </div>
            <div className={styles.information}>Drag and drop to reorder list</div>
          </div>
        </div>

      </div>
    </InnerWrapper>
  </Wrapper>
);

export default Home;
