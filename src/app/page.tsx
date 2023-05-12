'use client';

import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

export default function Home() {
  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/fetchLeaderboard',
    }).then((r) => {
      console.log({ r });
    });
  }, []);

  return (
    <div>
      <div>HOME</div>
      <div>
        <Button variant="contained">Beep</Button>
      </div>
    </div>
  );
}
