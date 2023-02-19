import { PaletteMode, responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import palette from './palette';
import { TYPOGRAPHY } from './typography';

const getTheme = (mode: PaletteMode) =>
  responsiveFontSizes(
    createTheme({
      palette: palette(mode),

      shadows: shadows(mode),

      typography: TYPOGRAPHY,
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          },
        },
      },
    }),
  );

export default getTheme;
