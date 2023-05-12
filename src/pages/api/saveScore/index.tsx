import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { token, endpoint } from '@/cfg/airtable';

const saveScore = async (req: NextApiRequest, res: NextApiResponse) => {
  const dataIn = req.body;

  const dataOut = {
    records: [
      {
        fields: {
          username: dataIn.username,
          score: dataIn.score,
        },
      },
    ],
  };

  console.log({ dataIn, dataOut });

  await axios({
    method: 'post',
    url: endpoint,
    data: dataOut,
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

export default saveScore;
