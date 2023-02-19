import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container } from '../../../common';
import { Hero } from './components';
import LatestNews from './components/LatestNews';

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.background.paper} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
        <Box bgcolor={theme.palette.background.default} position={'relative'}>
          <Container position="relative" zIndex={2}>
            <LatestNews />
          </Container>
        </Box>
      </Box>
      {/* <Container>
        <Highlights />
      </Container>
      <Container>
        <Features />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <DemoPages />
        </Container>
      </Box>
      <Container>
        <Footer />
      </Container> */}
    </Box>
  );
};

export default Home;
