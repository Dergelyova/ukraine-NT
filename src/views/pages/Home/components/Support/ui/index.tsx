import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { supportBg } from 'assets/articles';

const Support = () => {
  return (
    <Box position={'relative'}>
      <Box
        sx={{
          backgroundImage: `url(${supportBg})`,
          position: 'absolute',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'block',
          width: '100%',
          height: '250px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          background:
            'linear-gradient(180deg, rgba(231, 230, 233, 0.5) 0%, rgba(255, 255, 255, 0.5) 31.32%, rgba(255, 255, 255, 0.5) 60.9%, rgba(231, 230, 233, 0.5) 93.09%)',
          backdropFilter: 'blur(20px)',
          width: '497px',
          height: '407px',
          padding: 4,
          left: '70%',
          transform: 'translateX(-50%)',
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
        // data-aos={'fade-right'}
      >
        <Typography variant="h6" sx={{ color: 'primary.dark' }}>
          З початком війни наша Організація займалась та продовжує займатись
          підтримкою моніторів НПМ та членів Організації, які опинились у
          скрутних умовах.
        </Typography>
        <Typography
          flexGrow={1}
          variant="h6"
          sx={{
            color: 'primary.dark',
            display: 'flex',

            alignItems: 'center',
          }}
        >
          Підтримати нас коштами
        </Typography>
        <Button variant="contained" sx={{ alignSelf: 'flex-start' }}>
          Підтримати
        </Button>
      </Box>
    </Box>
  );
};

export default Support;
