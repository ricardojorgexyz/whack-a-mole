import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { token, endpoint } from '../../../cfg/airtable';

/*
 *
 * NOTE: I'm using a table view that is already sorted to
 * the top scores and I'm limiting the results to 10 on
 * the end point
 *
 * https://api.airtable.com/v0/{tableId}/game-table?maxRecords=10&view=sorted
 *
 */

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
    .catch((e) => {
      res.status(500).send(e);
    });
}
