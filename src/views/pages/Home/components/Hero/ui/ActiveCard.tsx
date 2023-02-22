import {
  Box,
  CardContent,
  Typography,
  CardActions,
  Card as MuiCard,
  Button,
} from '@mui/material';
import React from 'react';
import type { Article } from '../model';
import { styles } from './styles';
import { useTheme } from '@mui/material/styles';

interface Props {
  article: Article;
  i: number;
}
export const ActiveCard: React.FC<Props> = ({ article, i }) => {
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
        sx={styles.activeCard}
      >
        <Box flexGrow={1} />
        <Box
          component={CardContent}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'flex-start'}
        >
          <Typography
            align={'left'}
            variant={'h4'}
            textAlign={'left'}
            marginBottom={1}
          >
            {article.title}
          </Typography>
          <Typography align={'left'} variant={'body2'}>
            {article.text}
          </Typography>
        </Box>

        <Box component={CardActions} justifyContent={'flex-start'}>
          <Button
            size="large"
            variant="contained"
            sx={{
              backgroundColor: '#fff',
              color: '#000',
              '&:hover': { color: '#fff', backgroundColor: 'transparent' },
            }}
            href={`${process.env.PUBLIC_URL}/article`}
          >
            Читати далі
          </Button>
        </Box>
        <Box flexGrow={1} />
      </Box>
    </Box>
  );
};
