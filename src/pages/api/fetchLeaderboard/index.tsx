import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { token, endpoint } from '@/cfg/airtable';

/*
 *
 * NOTE: I'm using a table view that has already sorted
 * the top scores and I'm limiting the results to 10 on
 * the endpoint
 *
 */

const fetchLeaderboard = async (_req: NextApiRequest, res: NextApiResponse) => {
  await axios({
    method: 'get',
    url: `${endpoint}?maxRecords=10&view=sorted`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => {
      res.status(200).json(r.data);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
};

export default fetchLeaderboard;
