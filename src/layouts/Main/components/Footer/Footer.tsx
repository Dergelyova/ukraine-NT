import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Logo from 'svg/logos/Logo';
import LogoDark from 'svg/logos/LogoDark';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        color={'#fff'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="webbee"
          height={90}
          width={'auto'}
        >
          <LogoDark height={'90'} />
        </Box>
        <Box
          display="flex"
          flexWrap={'wrap'}
          justifyContent={'space-evenly'}
          alignItems={'center'}
          flex={1}
          color={'#fff'}
        >
          <Box marginTop={1}>
            <Link
              underline="none"
              component="a"
              href="/about"
              variant="subtitle1"
              color={'#fff'}
            >
              Про нас
            </Link>
          </Box>
          <Box marginTop={1}>
            <Link
              underline="none"
              component="a"
              href="/about"
              variant="subtitle1"
              color={'#fff'}
            >
              Наші проєкти
            </Link>
          </Box>
          <Box marginTop={1}>
            <Link
              underline="none"
              component="a"
              href="/about"
              variant="subtitle1"
              color={'#fff'}
            >
              Новини
            </Link>
          </Box>
          <Box marginTop={1}>
            <Link
              underline="none"
              component="a"
              href="/about"
              variant="subtitle1"
              color={'#fff'}
            >
              Бібліотека
            </Link>
          </Box>
          <Box marginTop={1}>
            <Link
              underline="none"
              component="a"
              href="/about"
              variant="subtitle1"
              color={'#fff'}
            >
              Контакти
            </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={6} marginTop={2}>
      <Typography
        align={'left'}
        variant={'subtitle2'}
        color="#fff"
        gutterBottom
      >
        Email: ukraine.without.torture@gmail.com
      </Typography>
      <Typography
        align={'left'}
        variant={'subtitle2'}
        color="#fff"
        gutterBottom
      >
        Адреса офісу: м. Київ вул. Хорива 22/28 оф. 54
      </Typography>
      <Typography
        align={'left'}
        variant={'subtitle2'}
        color="#fff"
        gutterBottom
      >
        Тел: +380 67 011 45 45
      </Typography>
    </Grid>
    <Grid item xs={6} marginTop={2}>
      <Box
        height={'100%'}
        display={'flex'}
        alignContent={'flex-end'}
        justifyContent={'flex-end'}
      >
        <Typography
          variant={'h2'}
          sx={{
            alignSelf: 'center',
            color: '#fff',
            '& span': { color: 'primary.light' },
          }}
        >
          Make Law <span>Not Torture</span>
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

export default Footer;
