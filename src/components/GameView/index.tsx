import React, { useState, useMemo } from 'react';
import { ScreenOpts } from '@/types';
import { Box, Grid } from '@mui/material';
import { useInterval } from '@/hooks/useInterval';
import { GAME_DURATION } from '@/cfg/game';
import { rng } from '@/scripts/rng';
import { Target } from './target';

interface SubProps {
  screenSet: React.Dispatch<React.SetStateAction<ScreenOpts>>;
  parseDiff: {
    int: number;
    reward: number;
  };
  incrementScore: () => void;
}

export const GameView = ({
  screenSet,
  parseDiff,
  incrementScore,
}: SubProps) => {
  const [activeTarget, activeTargetSet] = useState<number>(rng(1, 12));

  return (
    <Box>
      <Grid
        container
        justifyContent={'center'}
        spacing={1}
        alignItems={'center'}
      >
        {/* NOTE: coding this part at the end of the day on friday with time running out, at least I tried to make this hack somewhat tasteful */}
        {'😂'
          .padEnd(12, '🤣')
          .split('')
          .map((_val, i) => {
            return (
              <Grid item xs={3} key={`${_val}-${i}`} py={9}>
                <Target active={i === activeTarget} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
