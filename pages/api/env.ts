// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Env = {
  key: string;
  value?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Env[]>
) {
  const key = req.query.key as string;
  const value = process.env[key];
  res.status(200).json([
    {
      key,
      value,
    },
  ]);
}
