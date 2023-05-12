'use client';

import React from 'react';
import { Box, Grid, CssBaseline } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const VERSION = '1.1.0';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <CssBaseline />
      {/* Footer */}
      <Box
        sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}
        textAlign="center"
      >
        v{`${VERSION}`}
      </Box>
      {/* Body */}
      <Grid
        container
        style={{ minHeight: '95vh', position: 'absolute', top: 0, left: 0 }}
        alignItems="center"
        py={3}
      >
        <Grid item>{children}</Grid>
      </Grid>
    </Box>
  );
};
