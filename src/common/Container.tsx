import React, { FC } from 'react';
import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
  [x: string]: any;
}

export const Container: FC<Props> = ({ children, ...rest }) => (
  <Box
    maxWidth={{ sm: 720, md: 1236 }}
    width={'100%'}
    margin={'0 auto'}
    paddingX={2}
    paddingY={{ xs: 4, sm: 6, md: 8 }}
    {...rest}
  >
    {children}
  </Box>
);
