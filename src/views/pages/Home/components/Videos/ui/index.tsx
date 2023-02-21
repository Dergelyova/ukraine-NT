import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { CardMedia } from '@mui/material';

const Videos = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        {/* <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary.dark'}
          variant={'h3'}
        >
          Відео
        </Typography> */}
        <Typography variant={'h3'}>Відео</Typography>
      </Box>
      <Grid container spacing={6}>
        {[
          {
            link: 'https://www.youtube.com/embed/mvgPzhKSmT0',
            title:
              'We help your business gain leverage and efficiency through automation using simple, yet powerful NoCode tools.',
          },
          {
            link: 'https://www.youtube.com/embed/tvChJvEEyxE',
            subtitle:
              'We help you optimize your website or mobile app flow to increase conversion rates and retention to drive growth.',
          },
          {
            link: 'https://www.youtube.com/embed/mvgPzhKSmT0',
            subtitle:
              'We meet with your team to know more about your project idea and goals.',
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={'100%'}
              height={'100%'}
              position={'relative'}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                marginLeft={'-20px'}
                marginTop={'40px'}
                position={'absolute'}
                width={'100%'}
                height={'100%'}
                sx={{
                  backgroundColor: `${
                    i === 0
                      ? 'primary.light'
                      : i === 1
                      ? 'secondary.light'
                      : '#E7E7E9'
                  }`,
                }}
                borderRadius={3}
              />
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                display={'flex'}
                flexDirection={'column'}
                data-aos={'fade-up'}
                borderRadius={3}
                padding={0}
              >
                <CardMedia
                  height={'180px'}
                  sx={{ border: 'none' }}
                  component="iframe"
                  image={item.link}
                />

                {/* <Box flexGrow={1} /> */}
                {/* <Box
                  component={CardActions}
                  justifyContent={'flex-end'}
                  paddingX={4}
                >
                  <Button size="large">Learn More</Button>
                </Box> */}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videos;
