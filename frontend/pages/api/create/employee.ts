import type { NextApiRequest, NextApiResponse } from 'next'

const baseURL = "http://127.0.0.1:3333"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const response = await fetch(`${baseURL}/add-employee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        marital_status: req.body.marital_status,
        department: req.body.department,
        position: req.body.position,
        date_hired: req.body.date_hired,
        employment_status: req.body.employment_status,
        contact_number: req.body.contact_number,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        province: req.body.province,
        nationality: req.body.nationality
      })
    });
    const data = await response.json();
    res.status(200).json(data)
  } else {
    res.status(500).json({ Error: 'POST METHOD ONLY'})
  }
}