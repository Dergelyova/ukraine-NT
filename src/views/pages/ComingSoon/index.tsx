/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Container } from 'common';
import TeamWorkingIllustration from 'svg/illustrations/TeamWorking';

const ComingSoon = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(60);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Box
      minHeight={'calc(100vh - 64px - 183px)'}
      height={'100%'}
      display={'flex'}
      alignItems={'center'}
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item container justifyContent={'center'} xs={12} md={6}>
            <Box
              height={'100%'}
              width={'100%'}
              maxWidth={{ xs: 500, md: '100%' }}
            >
              <TeamWorkingIllustration height={'100%'} width={'100%'} />
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={'center'}
            justifyContent={'center'}
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                variant="h3"
                component={'h3'}
                align={isMd ? 'left' : 'center'}
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Тут скоро буде сторінка
              </Typography>
              <Typography
                component="p"
                color="textSecondary"
                align={isMd ? 'left' : 'center'}
              >
                Цей сайт ще знаходиться в процесі розробки
                <br />
                Незабаром ми будемо тут із нашим новим чудовим сайтом
              </Typography>
              <Box
                display="flex"
                flexDirection={'row'}
                justifyContent={'space-around'}
                marginY={2}
              ></Box>
              <form noValidate autoComplete="off">
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                >
                  <Box
                    flex={'1 1 auto'}
                    component={TextField}
                    label="Введіть свій імейл"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    height={54}
                  />
                  <Box
                    component={Button}
                    variant="contained"
                    color="primary"
                    size="large"
                    height={54}
                    marginTop={{ xs: 2, sm: 0 }}
                    marginLeft={{ sm: 2 }}
                  >
                    Підписатись
                  </Box>
                </Box>
              </form>
              <Box marginTop={2} display={'flex'} justifyContent={'center'}>
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ComingSoon;
