import {
  AppShell,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
  Breadcrumbs,
  Anchor,
  Card,
} from '@mantine/core';
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { NavbarPage } from '../pages/Navbar';
import { theme } from '../theme/theme';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const paths = location.pathname.split('/').filter((item) => item);
  console.log('location', location);

  const items = paths.map((item, index) =>
    // anchor only on first item
    index !== paths.length - 1 ? (
      <Anchor
        key={index}
        onClick={() => {
          navigate(`/${paths.slice(0, index + 1).join('/')}`);
        }}
      >
        {item}
      </Anchor>
    ) : (
      <Text key={index}>{item}</Text>
    )
  );
  console.log('items', items);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavbarPage hidden={!opened} />}
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Logo</Text>
          </div>
        </Header>
      }
    >
      <Card mb="xl">
        <Breadcrumbs separator=">" mx="xs">
          {items}
        </Breadcrumbs>
      </Card>
      {children}
    </AppShell>
  );
};
