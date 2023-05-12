'use client';

import React, { useEffect } from 'react';
import axios from 'axios';
import { Typography, Box, Button } from '@mui/material';
import { ScreenOpts } from '@/types';
import { useSettings } from '@/hooks/useSettings';

interface SubProps {
  screenSet: React.Dispatch<React.SetStateAction<ScreenOpts>>;
  score: number;
}

export const Endgame = ({ screenSet, score }: SubProps) => {
  const { username } = useSettings();

  // save score
  useEffect(() => {
    const saveScore = async () => {
      return axios({
        method: 'post',
        url: '/api/saveScore',
        data: {
          username,
          score,
        },
      });
    };
    saveScore();
  }, [username, score]);

  return (
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
  );
};
