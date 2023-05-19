import { InnerWrapper, Wrapper } from '@/components/atoms';
import styles from './header.module.scss';

const Header = () => (
  <Wrapper>
    <InnerWrapper>
      <div className={styles.header}>
        <div>
          <div className={styles.todoHeaderText}>
            <p>T O D O</p>
          </div>
        </div>
      </div>
    </InnerWrapper>
  </Wrapper>
);

export default Header;
