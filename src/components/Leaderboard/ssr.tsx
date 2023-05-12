'use server';

// tried to refactor this component into a server action

import React from 'react';
import axios from 'axios';
import { Box, Grid, Typography } from '@mui/material';
import { Leaderboard as LeaderboardType, ApiResponse } from '@/types';
import { stringCapitalize } from '@/scripts/stringCapitalize';

const fetchLeaderboard = async () => {
  const res = await axios<ApiResponse>({
    method: 'get',
    url: '/api/fetchLeaderboard',
  });

  if (res.status === 200) {
    const { data } = res;
    const result: LeaderboardType = data.records.map((item) => ({
      ...item.fields,
    }));
    return result;
  }
  return [];
};

export const Leaderboard = async () => {
  const leaderboard = await fetchLeaderboard();

  return (
    <Box>
      <Box>
        <Typography variant="h6" align="center" paragraph>
          {stringCapitalize('top 10 players', true)}
        </Typography>
      </Box>
      <Grid container justifyContent="center" spacing={0.3}>
        {leaderboard &&
          leaderboard.map((record, i) => {
            return (
              <Grid item xs={12} key={`${record.id}-${i}`}>
                <Box textAlign="center">
                  {i + 1}. {stringCapitalize(record.username, true)}:{' '}
                  <b>{record.score}</b>
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
