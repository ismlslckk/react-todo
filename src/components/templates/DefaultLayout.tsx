import { Navigate, Outlet } from 'react-router-dom';
import { Footer, Header } from '@/components/organisms';
import { InnerWrapper, Wrapper } from '@/components/atoms';

const DefaultLayout = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <Header />

        <Outlet />

        <Footer />
      </InnerWrapper>
    </Wrapper>
  );
};

export default DefaultLayout;
