import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '@/components/templates/DefaultLayout';
import './App.scss';
import AuthLayout from '@/components/templates/AuthLayout';
import NotFound from '@/pages/NotFound';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ProtectedRoute from '@/routes/ProtectedRoute';
import { Home } from './pages';

function App() {
  return (

    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
