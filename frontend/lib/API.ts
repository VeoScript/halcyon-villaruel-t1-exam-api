// ------------- API-ROUTE ------------- //

export const addEmployee = async (_args: any) => {
  const res = await fetch('/api/create/employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstname: _args.firstname,
      lastname: _args.lastname,
      birthdate: _args.birthdate,
      gender: _args.gender,
      marital_status: _args.marital_status,
      department: _args.department,
      position: _args.position,
      date_hired: _args.date_hired,
      employment_status: _args.employment_status,
      contact_number: _args.contact_number,
      email: _args.email,
      address: _args.address,
      city: _args.city,
      province: _args.province,
      nationality: _args.nationality
    })
  })

  if (!res.ok) {
    const json = await res.json()
    throw String(json.message)
  }
}