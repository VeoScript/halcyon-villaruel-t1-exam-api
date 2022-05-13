import type { NextApiRequest, NextApiResponse } from 'next'

const baseURL = "http://127.0.0.1:3333"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${baseURL}/employees`);
  const data = await response.json();
  res.status(200).json(data)
}