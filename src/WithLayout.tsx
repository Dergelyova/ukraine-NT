import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from './theme';
import AOS from 'aos';
import palette from 'theme/palette';
import { PaletteMode } from '@mui/material';

export const useDarkMode = () => {
  const [themeMode, setTheme] = useState<PaletteMode>('light');
  // const [paletteType, setPalette] = useState(palettes[0]);
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: PaletteMode) => {
    window.localStorage.setItem('themeMode', mode);
    setTheme(mode);
  };

  // const setThemePalette = (type = 'green') => {
  //   const palette = palettes.indexOf(type) === -1 ? 'green' : type;
  //   window.localStorage.setItem('themePalette', palette);
  //   setPalette(palette);
  // };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    localTheme ? setTheme(localTheme as PaletteMode) : setMode('light');
    // const localPalette = window.localStorage.getItem('themePalette');
    // localPalette ? setPalette(localPalette) : setThemePalette('green');
    setMountedComponent(true);
  }, []);

  return {
    themeMode,
    themeToggler,
    // paletteType,
    // setThemePalette,
    mountedComponent,
  };
};

interface Props {
  component: React.ElementType;
  layout: React.ElementType;
}

export default function WithLayout({
  component: Component,
  layout: Layout,
}: Props) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    // const jssStyles = document.querySelector('#jss-server-side');
    // if (jssStyles) {
    //   jssStyles.parentElement.removeChild(jssStyles);
    // }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const { themeMode, themeToggler, mountedComponent } = useDarkMode();

  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, themeMode]);

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>
        <Layout themeMode={themeMode} themeToggler={themeToggler}>
          <Component themeMode={themeMode} paletteType={'indigo'} />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
}
