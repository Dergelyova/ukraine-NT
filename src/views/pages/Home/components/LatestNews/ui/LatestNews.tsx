import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { CustomLink } from 'common';
import { articles } from '../model';
import { styles } from './styles';

const LatestNews = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary.dark'}
          align={'left'}
          variant={'h3'}
        >
          Останні новини
        </Typography>
        {/* <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
          data-aos={'fade-up'}
        >
          Our team aims to deliver
          <br /> the most outstanding work in every pixel.
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
          From your new website idea, to design, development, launch and scale!
        </Typography> */}
      </Box>
      <Grid container spacing={4}>
        {articles.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i} data-aos={'fade-up'}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={'100%'}
              height={'100%'}
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
                width={'100%'}
                height={'100%'}
                borderRadius={3}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  image={item.media}
                  title={item.title}
                  sx={{
                    height: 190,
                  }}
                />
                <Box component={CardContent}>
                  <Box
                    component={Typography}
                    variant={'overline'}
                    color={'primary.main'}
                    gutterBottom
                    align={'left'}
                  >
                    {item.date}
                  </Box>
                  <Box
                    component={Typography}
                    variant={'h5'}
                    gutterBottom
                    align={'left'}
                    sx={styles.title}
                  >
                    {item.title}
                  </Box>
                  {/* <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.subtitle}
                  </Typography> */}
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'flex-end'}>
                  <CustomLink link={'./'} color={'text.dark'}>
                     Читати далі
                  </CustomLink>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
