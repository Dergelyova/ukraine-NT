import {
  Box,
  CardContent,
  Typography,
  CardActions,
  Card as MuiCard,
} from '@mui/material';
import React from 'react';
import type { Article } from '../model';
import { useTheme } from '@mui/material/styles';
import { CustomLink } from 'common';

interface Props {
  article: Article;
  i: number;
}
export const Card: React.FC<Props> = ({ article, i }) => {
  const theme = useTheme();
  return (
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
        component={MuiCard}
        width={'100%'}
        height={'100%'}
        borderRadius={3}
        display={'flex'}
        flexDirection={'column'}
      >
        <Box
          component={CardContent}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'flex-start'}
        >
          <Typography align={'left'} variant={'h6'} textAlign={'left'}>
            {article.title}
          </Typography>
        </Box>
        <Box flexGrow={1} />
        <Box component={CardActions} justifyContent={'flex-start'}>
          <CustomLink link={`${process.env.PUBLIC_URL}/article`} color={'#000'}>
            Читати далі
          </CustomLink>
        </Box>
      </Box>
    </Box>
  );
};
