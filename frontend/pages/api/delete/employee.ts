import type { NextApiRequest, NextApiResponse } from 'next'

const baseURL = "http://127.0.0.1:3333"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const employeeId = req.body.id
    const response = await fetch(`${baseURL}/delete-employee/${String(employeeId)}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: String(employeeId)
      })
    });
    const data = await response.json();
    res.status(200).json(data)
  } else {
    res.status(500).json({ Error: 'DELETE METHOD ONLY'})
  }
}