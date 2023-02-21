import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container } from '../../../common';
import { Hero } from './components';
import LatestNews from './components/LatestNews/ui';
import Numbers from './components/Results/ui';
import Projects from './components/Projects';
import { bg } from 'assets/articles';
import Videos from './components/Videos';
import Support from './components/Support';

const Home = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.background.default}>
      <Box bgcolor={theme.palette.background.paper} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
        <Box bgcolor={theme.palette.background.default} position={'relative'}>
          <Container position="relative" zIndex={2}>
            <Numbers />
          </Container>
          <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1921 273"
            sx={{
              position: 'absolute',
              width: '100%',
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 1,
              height: '35%',
            }}
          >
            <polygon
              fill={theme.palette.background.paper}
              points="0,273 1921,273 1921,0 "
            />
          </Box>
        </Box>
        <Box position={'relative'}>
          <Container position="relative" zIndex={2}>
            <LatestNews />
          </Container>
        </Box>

        <Box position={'relative'}>
          <Projects />
        </Box>
        <Box position={'relative'}>
          <Container position="relative" zIndex={2}>
            <Videos />
          </Container>
        </Box>
        <Box position={'relative'} paddingY={6}>
          <Support />
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
