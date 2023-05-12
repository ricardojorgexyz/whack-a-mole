'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ScreenOpts } from '@/types';
import {
  GAME_DIFF_EASY_INTERVAL,
  GAME_DIFF_EASY_SCORE,
  GAME_DIFF_HARD_INTERVAL,
  GAME_DIFF_HARD_SCORE,
  GAME_DIFF_MED_INTERVAL,
  GAME_DIFF_MED_SCORE,
} from '@/cfg/game';
import { useSettings } from '@/hooks/useSettings';
import { HomeWelcome } from './welcome';
import { GameView } from '../GameView';

export const HomeView = () => {
  const { diff } = useSettings();

  const [screen, screenSet] = useState<ScreenOpts>('no-game');
  const [score, scoreSet] = useState<number>(0);

  const parseDiff = useMemo(() => {
    switch (diff) {
      case 'hard':
        return {
          int: GAME_DIFF_HARD_INTERVAL,
          reward: GAME_DIFF_HARD_SCORE,
        };

      case 'med':
        return {
          int: GAME_DIFF_MED_INTERVAL,
          reward: GAME_DIFF_MED_SCORE,
        };

      case 'easy':
      default:
        return {
          int: GAME_DIFF_EASY_INTERVAL,
          reward: GAME_DIFF_EASY_SCORE,
        };
    }
  }, [diff]);

  const incrementScore = useCallback(() => {
    scoreSet(score + parseDiff.reward);
  }, [parseDiff, score, scoreSet]);

  return (
    <Box>
      {screen === 'no-game' && (
        <HomeWelcome screenSet={screenSet} scoreSet={scoreSet} />
      )}
      {screen === 'in-game' && (
        <GameView
          score={score}
          incrementScore={incrementScore}
          parseDiff={parseDiff}
          screenSet={screenSet}
        />
      )}
      {screen === 'end-game' && (
        <Box>
          <Box textAlign={'center'}>
            <Typography variant="h3">Your Score: {score}</Typography>
          </Box>
          <Box textAlign={'center'} mt={3}>
            <Button
              size="large"
              variant="contained"
              onClick={() => screenSet('no-game')}
            >
              EXIT
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};
