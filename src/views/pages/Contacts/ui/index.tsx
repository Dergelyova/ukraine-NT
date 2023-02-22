import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Map from './map';
import { Container } from 'common';
import Form from './form';

const Contact = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Container>
        <Grid container spacing={isMd ? 8 : 4}>
          <Grid item xs={12} md={6}>
            <Map themeMode={themeMode} />
          </Grid>
          <Grid item container xs={12} md={6} alignItems={'center'}>
            <Form />
          </Grid>
        </Grid>
      </Container>
      <Box bgcolor={theme.palette.background.default}>
        <Container maxWidth={800}>{/* <Faq /> */}</Container>
      </Box>
    </Box>
  );
};

Contact.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Contact;
