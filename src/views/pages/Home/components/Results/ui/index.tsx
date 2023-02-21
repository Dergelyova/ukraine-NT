import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { content } from '../model';

const Numbers = () => {
  const theme = useTheme();

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible: boolean) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            fontWeight: 'medium',
          }}
          variant={'h3'}
          gutterBottom
          color={'primary'}
          align={'center'}
        >
          МІСІЯ
        </Typography>

        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Викорінення в Україні катувань та жорстокого поводження з особами
          <br />в місцях несвободи. Розвиток НПМ в Україні.
        </Typography>
      </Box>
      <Box marginBottom={{ xs: 4, sm: 6, md: 8 }}>
        <Grid container spacing={2}>
          {content.map((item, i) => (
            <Grid key={i} item xs={12} md={4}>
              <Typography variant="h3" align={'center'} gutterBottom>
                <Box fontWeight={600}>
                  <VisibilitySensor
                    onChange={(isVisible: boolean) =>
                      setViewPortVisibility(isVisible)
                    }
                    delayedCall
                  >
                    <CountUp
                      redraw={false}
                      end={viewPortEntered ? item.title : 0}
                      start={0}
                      suffix={item.suffix}
                    />
                  </VisibilitySensor>
                </Box>
              </Typography>
              {/* <Typography align={'center'} variant="h6" gutterBottom>
                {item.label}
              </Typography> */}
              <Typography color="text.secondary" align={'center'} component="p">
                {item.subtitle}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Numbers;
