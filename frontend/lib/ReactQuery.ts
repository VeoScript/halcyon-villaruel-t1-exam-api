import {
  useQuery,
  useMutation,
  useQueryClient
} from 'react-query'

export function useGetEmployees() {
  return useQuery('employees', 
    async () => {
      const employees = fetch('/api/employees')
      return (await employees).json()
    },
    {
      refetchInterval: 1000
    }
  )
}
