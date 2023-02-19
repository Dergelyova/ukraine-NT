import { Styles } from 'common';

export const styles: Styles = {
  container: {
    marginTop: { xs: -4, sm: -6, md: -8 },
    position: 'relative',
    '& .slick-prev:before, .slick-next:before': {
      color: 'primary.dark',
    },
    '& .slick-prev, .slick-next': {
      top: '77%',
    },
    '& .slick-track': {
      display: 'flex',
      alignItems: 'end',
      height: 400,
    },
    '& .slick-slide': {
      display: 'flex',
      alignItems: 'end',
      width: '100%',
      '& div': { width: '100%' },
    },
  },

  activeCard: {
    color: '#fff',
    backgroundColor: 'primary.dark',
  },

  card: {
    transition: '1s ease height',
    animationDuration: '2s',
  },

  image: {
    position: 'absolute',
    width: '100%',
    height: 400,
    transition: `$fadeIn 1s ease-in-out`,
    '& img': {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      objectPosition: 'center',
    },
  },

  '@keyframes fadeIn': {
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
};
