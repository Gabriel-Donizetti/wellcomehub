import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../../modules/auth/models/UserRoleTypes';

interface PrivateRouteProps {
  allowedRoles: UserRole[];
}

export const PrivateRoute = ({ allowedRoles }: PrivateRouteProps) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Carregando...</div>; // Pode substituir por um spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
