import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { useSettings } from '@/hooks/useSettings';

export const Settings = () => {
  const { username, updateUsername, diff, showProto, updateDiff, updateProto } =
    useSettings();

  return (
    <Box pb={2}>
      <Box>
        <Typography variant="h6" align="center" paragraph>
          User Settings
        </Typography>
      </Box>
      <Grid container alignItems="center" spacing={1.5}>
        <Grid item>
          <Typography>
            <b>Username:</b>
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            value={username}
            onChange={(e) => updateUsername(e.target.value)}
            fullWidth
            placeholder="Username"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} container alignItems="center" spacing={0.3}>
          <Grid item>
            <Typography>
              <b>Difficulty:</b>
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant={diff === 'easy' ? 'contained' : 'text'}
              onClick={() => updateDiff('easy')}
            >
              EASY
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant={diff === 'med' ? 'contained' : 'text'}
              onClick={() => updateDiff('med')}
            >
              MED
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant={diff === 'hard' ? 'contained' : 'text'}
              onClick={() => updateDiff('hard')}
            >
              HARD
            </Button>
          </Grid>
        </Grid>
        <Grid item container spacing={0.3}>
          <Grid item>
            <Typography>
              <b>Show Prototype:</b>
            </Typography>
          </Grid>
          <Grid item>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => updateProto(!showProto)}
            >
              {showProto ? '✅' : '⬛'}
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
