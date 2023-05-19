import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
  <>
    {/* login or register */}
    <Outlet />
  </>
);

export default AuthLayout;
