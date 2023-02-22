/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Map = ({ themeMode = 'light' }) => {
  return (
    <Box>
      <Box>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
            }}
          >
            Наші контакти
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={'textSecondary'}>
            Залишаймося на звʼязку
          </Typography>
        </Box>
      </Box>
      <Box marginY={4}>
        <Box
          component={'iframe'}
          borderRadius={2}
          minHeight={400}
          width="100%"
          height="100%"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Milan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          sx={{
            filter:
              themeMode === 'dark' ? 'grayscale(0.5) opacity(0.7)' : 'none',
          }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Телефон:
          </Typography>
          <Typography variant={'subtitle1'}>+380 67 011 45 45</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Email:
          </Typography>
          <Typography variant={'subtitle1'}>
            ukraine.without.torture@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Адреса:
          </Typography>
          <Typography variant={'subtitle1'}>
            м. Київ вул. Хорива 22/28 оф. 54
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Соціальні мережі:
          </Typography>
          <Box display={'flex'} justifyContent={'start'}>
            <IconButton
              color="primary"
              aria-label="facebook"
              href="https://www.facebook.com/ukraine.without.torture"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="twitter"
              href="https://twitter.com/Ukr_noTorture?fbclid=IwAR2rqady3mFyaxcRNgWfM5w6SC0DXzz5OJ8xt1XaPLJrBvJ2sKxeAWRmRM8"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="instagram"
              href="https://www.instagram.com/ukraine_without_torture/?fbclid=IwAR1XR44O3pQN225faYDEGtQyzzkJvVgQnAhyySsA_UIeSX8_0ycUmsuVGpY"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

Map.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Map;
