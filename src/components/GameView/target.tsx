import React from 'react';
import { Box } from '@mui/material';

interface SubProps {
  active?: boolean;
}

export const Target = ({ active }: SubProps) => {
  return (
    <Box
      sx={{
        height: '60px',
        width: '60px',
        backgroundColor: active ? 'red' : 'blue',
      }}
    />
  );
};
