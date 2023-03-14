import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { AppRoutes } from './pages/AppRoutes';
import { NavbarPage } from './pages/Navbar';
import {
  AppShell,
  Aside,
  Burger,
  Footer,
  Header,
  MantineProvider,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { theme } from './theme/theme';

function App() {
  return (
    <div className="App">
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS withCSSVariables>
        <AppRoutes />
      </MantineProvider>
    </div>
  );
}

export default App;
