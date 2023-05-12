import React from 'react';
import { Box } from '@mui/material';

interface SubProps {
  active?: boolean;
  incrementScore: () => void;
  switchTarget: () => void;
}

export const Target = ({ active, incrementScore, switchTarget }: SubProps) => {
  return (
    <Box
      sx={{
        height: '60px',
        width: '60px',
        backgroundColor: active ? 'red' : 'blue',
        cursor: 'pointer',
      }}
      onClick={() => {
        if (active) {
          incrementScore();
          switchTarget();
        }
      }}
    />
  );
};
