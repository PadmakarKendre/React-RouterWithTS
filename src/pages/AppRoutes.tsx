import { Loader, LoadingOverlay } from '@mantine/core';
import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

export type RouteConfig = {
  name: string;
  locale?: string;
  path: string;
  component?: React.ComponentType<any> | string;
  exact?: boolean;
  hideInMenu?: boolean;
  routes?: RouteConfig[];
  accessTO?: string[];
  redirect?: string;
  icon?: string;
  key?: string;
  parentKey?: string;
  initiallyOpened?: boolean;
  icons?: [];
  iconsList?: string[],
  Icon?: React.ComponentType<any> | string;
};

export const ConfigRoutes: RouteConfig[] = [
  {
    name: 'Login',
    locale: 'user.login',
    path: '/user/login',
    component: './User/Login',
    hideInMenu: true,
  },
  {
    path: '/dashboard',
    locale: 'dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    exact: true,
    routes: [
      {
        path: '/dashboard/analysis',
        locale: 'dashboard.analysis',
        name: 'analysis',
        component: 'pages/dashboard/analysis',
        exact: true,
        accessTO: ['admin'],
      },
      {
        path: '/dashboard/monitor',
        locale: 'dashboard.monitor',
        component: 'pages/dashboard/monitor',
        name: 'monitor',
        exact: true,
      },
      {
        path: '/dashboard/workplace',
        locale: 'dashboard.workplace',
        component: 'pages/dashboard/workplace',
        name: 'workplace',
        exact: true,
      },
    ],
  },
  {
    path: '/projects',
    locale: 'projects',
    name: 'Projects',
    icon: 'projects',
    redirect: '/projects/list',
    routes: [
      {
        path: '/projects/list',
        locale: 'projects.list',
        name: 'Projects',
        icon: 'projects',
        exact: true,
      },
      {
        path: '/projects/:id',
        locale: 'projects.details',
        name: 'Project Details',
        hideInMenu: true,
        icon: 'projects',
        key: 'projects',
        exact: true,
      },

      {
        path: '/projects/:id/settings',
        locale: 'projects.settings',
        icon: 'settings',
        name: 'Settings',
        parentKey: 'details',
        exact: true,
      },
    ],
  },
];

type AppRoutesProps = {
  routes: RouteConfig[];
};

import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { routes } from '../routes/routes';

export const AppRoutes = () => {
  const router = createBrowserRouter([...routes]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
