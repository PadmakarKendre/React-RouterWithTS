import { Loader, Menu } from '@mantine/core';
import { lazy, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import { MainLayout } from '../Layouts/MainLayout';
import RestrictedRoute from './RestrictedRoute';
const DashboardRoutes = lazy(() => import('../pages/Dashboard/routes/index'));
const ProjectRoutes = lazy(() => import('../pages/Projects/routes/index'));

const App = () => (
  <RestrictedRoute>
    <MainLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  </RestrictedRoute>
);

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/analysis" />,
      },
      {
        path: 'dashboard/*',
        element: <DashboardRoutes />,
      },
      {
        path: 'projects/*',
        element: <ProjectRoutes />,
      },

      { path: '*', element: <ErrorPage /> },
    ],
  },
];
