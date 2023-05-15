import { InnerWrapper, Wrapper } from '@/components/atoms';
import styles from './home.module.scss';

const Home = () => (
  <Wrapper>
    <InnerWrapper>
      <div className={styles.home} />
    </InnerWrapper>
  </Wrapper>
);

export default Home;
