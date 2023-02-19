import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { Topbar, Sidebar, Footer } from './components';
import { Container } from 'common';
import { pages } from '../navigation';

interface HideOnScrollProps {
  children: React.ReactElement;
}

const HideOnScroll: React.FC<HideOnScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div>
      <HideOnScroll>
        <AppBar
          position={'fixed'}
          sx={{
            backgroundColor: theme.palette.background.paper,
          }}
          elevation={1}
        >
          <Container paddingY={{ xs: 1, sm: 2 }}>
            <Topbar onSidebarOpen={handleSidebarOpen} />
          </Container>
        </AppBar>
      </HideOnScroll>
      <Sidebar
        onClose={handleSidebarClose}
        open={openSidebar}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Box height={{ xs: 56, sm: 92 }} />
        {children}
        <Divider />
      </main>
      <Box bgcolor={'primary.dark'}>
        <Container paddingY={4}>
          <Footer />
        </Container>
      </Box>
    </div>
  );
};

export default Main;
