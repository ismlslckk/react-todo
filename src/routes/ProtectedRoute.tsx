import {
  Navigate,
  Outlet,
} from 'react-router-dom';

const ProtectedRoute = ({ redirectPath = 'auth/login/', children = null }) => {
  const token = localStorage.getItem('token');
  if (!token) { return <Navigate to={redirectPath} replace />; }

  return children || <Outlet />;
};

export default ProtectedRoute;
