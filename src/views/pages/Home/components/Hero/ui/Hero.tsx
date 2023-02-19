import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import { articles } from '../model';
import { styles } from './styles';
import { useStore } from 'effector-react';
import { heroModel } from '..';

import { ActiveCard } from './ActiveCard';
import { Card } from './Card';

const Hero = () => {
  const activeIndex = useStore(heroModel.$activeIndex);
  const activePhoto = articles[activeIndex].image;
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

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    beforeChange: (old: number, index: number) => heroModel.slideChanged(index),
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.image}>
        <img src={activePhoto} alt="" />
      </Box>
      <Box sx={{ height: 150 }}></Box>
      <Slider {...sliderOpts}>
        {articles.map((item, i) => (
          <Box
            key={i}
            height={
              i === activeIndex
                ? { xs: 200, sm: 300, md: 400 }
                : { xs: 100, sm: 150, md: 190 }
            }
            padding={{ xs: 1, sm: 1, md: 1 }}
            sx={styles.card}
          >
            {i === activeIndex ? (
              <ActiveCard article={item} i={i} />
            ) : (
              <Card article={item} i={i} />
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

// Hero.propTypes = {
//   themeMode: PropTypes.string.isRequired,
// };

export default Hero;
