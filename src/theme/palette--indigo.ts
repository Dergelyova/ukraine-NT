import { PaletteOptions } from '@mui/material';

interface ExtendPalette extends PaletteOptions {
  alternate: {
    main: string;
    dark: string;
  };
  cardShadow: string;
  text: {
    primary: string;
    secondary: string;
    dark?: string;
    light?: string;
  };
}

export const light: ExtendPalette = {
  alternate: {
    main: '#f7f9fc',
    dark: '#edf1f7',
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',
  primary: {
    main: '#5B7BBC',
    light: '#8DAAEF',
    dark: '#264F8C',
    contrastText: '#fff',
  },
  secondary: {
    light: '#D2CDE7',
    main: '#D2CDE7',
    dark: '#726E85',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#2e2e2e',
    secondary: '#000000',
    dark: '#686868',
    light: '#fffff',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    default: '#f7f9fc',
  },
};

export const dark: ExtendPalette = {
  alternate: {
    main: '#1a2138',
    dark: '#151a30',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },
  mode: 'dark',
  primary: {
    main: '#7b1fa2',
    light: '#9c27b0',
    dark: '#4a148c',
    contrastText: '#fff',
  },
  secondary: {
    light: '#FFEA41',
    main: '#FFE102',
    dark: '#DBBE01',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#222B45',
    default: '#222B45',
  },
};
