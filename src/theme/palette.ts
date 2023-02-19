import { PaletteMode, PaletteOptions } from '@mui/material';
import { light as lightIndigo, dark as darkIndigo } from './palette--indigo';

const palette = (themeMode: PaletteMode): PaletteOptions => {
  return themeMode === 'dark' ? darkIndigo : lightIndigo;
};

export default palette;
