import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { token, endpoint } from '../../../cfg/airtable';

export default function fetchLeaderboard(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  axios({
    method: 'get',
    url: endpoint,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => {
      res.status(200).json(r.data);
    })
    .catch((e) => console.error(e));
}
