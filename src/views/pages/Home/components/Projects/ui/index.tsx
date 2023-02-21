import React, { useState } from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import { bg } from 'assets/articles';
import {
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
  projectImage5,
  projectImage9,
} from 'assets/projects';

const photos = [
  {
    src: projectImage1,
    title: 'New York',
  },
  {
    src: projectImage2,
    title: 'Paris',
  },
  {
    src: projectImage3,
    title: 'Barcelona',
  },
  {
    src: projectImage4,
    title: 'Prague',
  },
  {
    src: projectImage5,
    title: 'Milan',
  },
  {
    src: projectImage9,
    title: 'Yerevan',
  },
];

const Gallery = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 1;
  }
  if (isMd) {
    slidesToShow = 2;
  }
  if (isLg) {
    slidesToShow = 3;
  }

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  // const openLightbox = (index:n) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // };

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          color={'primary'}
          align={'center'}
          variant={'h3'}
        >
          Peалізовані проєкти
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          backgroundSize: 'cover',
          paddingBlock: 10,
          paddingRight: 50,
        }}
      >
        <Slider {...sliderOpts}>
          {photos.map((item, i) => (
            <Box key={i} paddingX={2}>
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                // borderRadius={3}
                sx={{
                  cursor: 'pointer',
                }}
              >
                <CardMedia
                  image={item.src}
                  title={item.title}
                  sx={{
                    height: '370px',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
        {/* <Box
          marginTop={2}
          display={'flex'}
          justifyContent={'flex-end'}
          data-aos="fade-up"
        >
          <Button color={'primary'} variant={'contained'} size={'large'}>
            View all
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Gallery;
