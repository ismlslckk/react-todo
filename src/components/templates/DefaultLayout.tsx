import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Footer, Header } from '@/components/organisms';
import { InnerWrapper, Wrapper } from '@/components/atoms';

const DefaultLayout = () => {
  const [isLogged] = useState(true);

  if (!isLogged) {
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
