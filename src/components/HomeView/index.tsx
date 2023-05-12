'use client';

import React, { useState, useCallback } from 'react';
import { Box } from '@mui/material';
import { ScreenOpts } from '@/types';
import { HomeWelcome } from './welcome';

export const HomeView = () => {
  const [screen, screenSet] = useState<ScreenOpts>('no-game');

  return (
    <Box>
      {screen === 'no-game' && <HomeWelcome screenSet={screenSet} />}
      {screen === 'in-game' && <HomeWelcome screenSet={screenSet} />}
      {screen === 'end-game' && <HomeWelcome screenSet={screenSet} />}
    </Box>
  );
};
