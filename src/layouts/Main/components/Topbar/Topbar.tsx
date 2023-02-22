import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from 'svg/logos/Logo';
import { IconButton, useMediaQuery } from '@mui/material';

interface Props {
  onSidebarOpen: () => void;
}
const Topbar: React.FC<Props> = ({ onSidebarOpen }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box display={'flex'} alignItems={'center'}>
        {/* {isXs && (
          <Box marginRight={{ xs: 1, sm: 2 }}>
            <IconButton onClick={onSidebarOpen} aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Box>
        )} */}
        <Box
          display={'flex'}
          alignItems="baseline"
          component="a"
          href={`${process.env.PUBLIC_URL}/`}
          title="ukraine no torture"
          height={{ xs: 40, md: 60 }}
        >
          <Logo height={'100'} width={'100'} />
        </Box>
      </Box>
      <Box display="flex" alignItems={'center'}>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href={`${process.env.PUBLIC_URL}/about`}
              color="textPrimary"
              variant="subtitle1"
            >
              Про нас
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href="/projects"
              color="textPrimary"
              variant="subtitle1"
            >
              Наші проєкти
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href="/news"
              color="textPrimary"
              variant="subtitle1"
            >
              Новини
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href="/library"
              color="textPrimary"
              variant="subtitle1"
            >
              Бібліотека
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href={`${process.env.PUBLIC_URL}/contacts`}
              color="textPrimary"
              variant="subtitle1"
            >
              Контакти
            </Link>
          </Box>
          <Box marginX={2}>
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://material-ui.com/store/items/webbee-landing-page/"
              size="large"
            >
              ПІДТРИМАТИ
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
