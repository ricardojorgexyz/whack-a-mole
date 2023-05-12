import React, { useState, useEffect, useCallback } from 'react';
import { ScreenOpts } from '@/types';
import { Box, Grid, Typography } from '@mui/material';
import { GAME_DURATION } from '@/cfg/game';
import { rng } from '@/scripts/rng';
import { useSettings } from '@/hooks/useSettings';
import { Target } from './target';

interface SubProps {
  screenSet: React.Dispatch<React.SetStateAction<ScreenOpts>>;
  parseDiff: {
    int: number;
    reward: number;
  };
  incrementScore: () => void;
  score: number;
}

export const GameView = ({
  screenSet,
  parseDiff,
  incrementScore,
  score,
}: SubProps) => {
  const { showProto } = useSettings();
  const [activeTarget, activeTargetSet] = useState<number>(rng(1, 12));

  const switchTarget = useCallback(() => {
    const newTarget = rng(1, 12);
    console.log(`target: ${newTarget}`);
    activeTargetSet(newTarget);
  }, []);

  useEffect(() => {
    const targetInterval = setInterval(() => {
      switchTarget();
    }, parseDiff.int);
    return () => {
      clearInterval(targetInterval);
    };
  }, [parseDiff, activeTarget, switchTarget]);

  useEffect(() => {
    console.log('GAME DURATION: ', GAME_DURATION);
    const gameInterval = setInterval(() => {
      screenSet('end-game');
    }, GAME_DURATION);
    return () => {
      clearInterval(gameInterval);
    };
  }, [screenSet]);

  return (
    <Box
      sx={
        showProto
          ? {}
          : {
              backgroundImage: 'url("/static/WAM_bg.jpg")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            }
      }
    >
      <Box textAlign="center" pb={9}>
        <Typography variant="h6" paragraph>
          Your Score: {score}
        </Typography>
      </Box>
      <Grid
        container
        justifyContent={'center'}
        spacing={1}
        alignItems={'center'}
      >
        {/* NOTE: coding this part at the end of the day on friday with time running out, I tried to make this hack somewhat tasteful. Was hitting ReactNode vs JSX.Element on Grid children */}
        {'😂'
          .padEnd(12, '🤣')
          .split('')
          .map((_val, i) => {
            return (
              <Grid item xs={3} key={`${_val}-${i}`} py={9}>
                <Box textAlign={'center'}>
                  <Box display={'inline-block'}>
                    <Target
                      active={i + 1 === activeTarget}
                      incrementScore={incrementScore}
                      switchTarget={switchTarget}
                    />
                  </Box>
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
