import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { SidebarNav } from './components';
import type { Page } from 'layouts/navigation';

interface Props {
  onClose: () => void;
  open: boolean;
  variant?: 'permanent' | 'persistent' | 'temporary';
  pages: Page[];
}

const Sidebar: React.FC<Props> = (props) => {
  const { pages, open, variant, onClose, ...rest } = props;

  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: { xs: '100%', sm: 400 },
        },
      }}
    >
      <Box
        {...rest}
        sx={{
          height: '100%',
          padding: 1,
        }}
      >
        <SidebarNav pages={pages} onClose={onClose} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
