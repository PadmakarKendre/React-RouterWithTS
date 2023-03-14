import { Navbar, Group, Code, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { LinksGroup } from '../components/NavbarLinksGroup';
import { RouteConfig } from './AppRoutes';

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
    initiallyOpened: true,
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

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

type NavbarPageProps = {
  hidden: boolean;
};
export function NavbarPage({ hidden }: NavbarPageProps) {
  const { classes } = useStyles();
  const links = ConfigRoutes.filter((item) => !item.hideInMenu).map((item) => (
    <LinksGroup data={item} key={item.name} />
  ));

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar} hidden={hidden}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
