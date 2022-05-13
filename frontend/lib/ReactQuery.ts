import { useQuery, useMutation } from 'react-query'
import { addEmployee } from './API'

export function useGetEmployees() {
  return useQuery('employees', 
    async () => {
      const employees = fetch('/api/read/employees')
      return (await employees).json()
    },
    {
      refetchInterval: 1000
    }
  )
}

export const useAddEmployee = () => {
  return useMutation((_args: any) => addEmployee({
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
  )
}
