import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, Typography } from '@mui/material';
import { Leaderboard as LeaderboardType, ApiResponse } from '@/types';

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
  }, []);

  return (
    <Box>
      <Box>
        <Typography variant="h6" align="center">
          Leaderboard
        </Typography>
      </Box>
      <Grid container justifyContent="center">
        {leaderboard.map((record) => {
          return (
            <Grid item container key={record.id}>
              <Grid item>
                {record.score} ({record.username})
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
