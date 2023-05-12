'use client';

import React, { useState, useCallback } from 'react';
import { Typography, Box, Grid, Button, Dialog } from '@mui/material';
import { Leaderboard } from '../Leaderboard';
import { useSettings } from '@/hooks/useSettings';

export const HomeView = () => {
  const [showLeaderboard, showLeaderboardSet] = useState<boolean>(false);
  const openLeaderboard = useCallback(
    () => showLeaderboardSet(true),
    [showLeaderboardSet],
  );
  const closeLeaderboard = useCallback(
    () => showLeaderboardSet(false),
    [showLeaderboardSet],
  );

  const { username } = useSettings();

  console.log({ username });

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
            <Button fullWidth variant="contained" size="large">
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
    </Box>
  );
};
