import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default function fetchLeaderboard(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).send('Hello World');
}
