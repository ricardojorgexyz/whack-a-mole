'use client';

import React from 'react';
import {
  Box,
  Grid,
  CssBaseline,
  Container,
  Link,
  Typography,
} from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const VERSION = '1.2.0';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <CssBaseline />
      {/* Footer */}
      <Box
        sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}
        textAlign="center"
      >
        <Typography variant="body2">
          <Link
            href="https://github.com/ricardojorgeio/whack-a-mole"
            target="_blank"
            rel="noopener noreferrer"
          >
            v{`${VERSION}`}
          </Link>
        </Typography>
      </Box>
      {/* Body */}
      <Container>
        <Grid
          container
          style={{ minHeight: '95vh', position: 'absolute', top: 0, left: 0 }}
          alignItems="center"
          justifyContent="center"
          py={3}
        >
          <Grid item>{children}</Grid>
        </Grid>
      </Container>
    </Box>
  );
};
