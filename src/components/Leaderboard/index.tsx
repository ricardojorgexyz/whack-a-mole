import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Leaderboard = () => {
  useEffect(() => {
    // use the new NextJS 13 server actions
    const fetchData = async () => {
      'use server';

      axios({
        method: 'get',
        url: '/api/fetchLeaderboard',
      }).then((r) => {
        console.log({ r });
      });
    };

    fetchData();
  }, []);

  return <>Leaderboard</>;
};
