import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './shared/contexts/AuthContext';
import { HomeView } from './modules/home';
import { LoginView } from './modules/auth/pages/LoginView';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './Theme';
import { PrivateRoute } from './shared/components/PrivateRoute';
import { UserRole } from './modules/auth/models/UserRoleTypes';
import { AdminRoutes } from './modules/admin/routes/AdminRoutes';
import { CssBaseline } from '@mui/material';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />
  },
  {
    path: '/login',
    element: <LoginView />
  },
  {
    path: '/admin',
    element: <PrivateRoute allowedRoles={[UserRole.ADMIN]} />,
    children: [
      {
        path: '*', // Captura todas as sub-rotas
        element: <AdminRoutes />
      }
    ]
  },
  {
    path: '/employe',
    element: <PrivateRoute allowedRoles={[UserRole.EMPLOYEE]} />,
    children: [
      {
        path: '*', // Captura todas as sub-rotas
        // element: <EmployeRoutes />
      }
    ]

  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);