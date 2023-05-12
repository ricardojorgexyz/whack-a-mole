import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, Typography } from '@mui/material';
import { Leaderboard as LeaderboardType, ApiResponse } from '@/types';
import { stringCapitalize } from '@/scripts/stringCapitalize';

export const Leaderboard = () => {
  const [leaderboard, leaderboardSet] = useState<LeaderboardType>([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      return axios<ApiResponse>({
        method: 'get',
        url: '/api/fetchLeaderboard',
      });
    };

    fetchLeaderboard()
      .then((r) => {
        const { data } = r;
        const result: LeaderboardType = data.records.map((item) => ({
          ...item.fields,
        }));
        leaderboardSet(result);
      })
      .catch((e) => {
        console.error(e);
        leaderboardSet([]);
      });

    return () => leaderboardSet([]);
  }, []);

  return (
    <Box>
      <Box>
        <Typography variant="h6" align="center" paragraph>
          {stringCapitalize('top 10 players', true)}
        </Typography>
      </Box>
      <Grid container justifyContent="center" spacing={0.3}>
        {leaderboard.map((record, i) => {
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
