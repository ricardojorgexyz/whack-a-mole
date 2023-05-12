'use client';

import React, { useState, useCallback } from 'react';
import { Typography, Box, Grid, Button, Dialog } from '@mui/material';
import { ScreenOpts } from '@/types';
import { Leaderboard } from '../Leaderboard';
import { Settings } from '../Settings';

interface SubProps {
  screenSet: React.Dispatch<React.SetStateAction<ScreenOpts>>;
}

export const HomeWelcome = ({ screenSet }: SubProps) => {
  const [showLeaderboard, showLeaderboardSet] = useState<boolean>(false);
  const openLeaderboard = useCallback(
    () => showLeaderboardSet(true),
    [showLeaderboardSet],
  );
  const closeLeaderboard = useCallback(
    () => showLeaderboardSet(false),
    [showLeaderboardSet],
  );
  const [showSettings, showSettingsSet] = useState<boolean>(false);
  const openSettings = useCallback(
    () => showSettingsSet(true),
    [showSettingsSet],
  );
  const closeSettings = useCallback(
    () => showSettingsSet(false),
    [showSettingsSet],
  );

  return (
    <Box>
      <Box>
        <Box>
          <Typography variant="h1" paragraph>
            Whack-a-mole!
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" size="large">
              PLAY
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={openLeaderboard}
            >
              LEADERBOARD
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={openSettings}
            >
              SETTINGS
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* Leaderboard dialog */}
      <Dialog open={showLeaderboard} onClose={closeLeaderboard}>
        <Box p={1}>
          <Leaderboard />
        </Box>
      </Dialog>
      {/* Settings dialog */}
      <Dialog open={showSettings} onClose={closeSettings}>
        <Box p={1}>
          <Settings />
        </Box>
      </Dialog>
    </Box>
  );
};
