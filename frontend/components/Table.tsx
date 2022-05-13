import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import { useGetEmployees, useDeleteEmployee } from '../lib/ReactQuery'

const Table = () => {

  const deleteEmployee = useDeleteEmployee()

  const { data: employees, isLoading, isError } = useGetEmployees()

  if (isLoading) return <div>Loading</div>
  if(isError) return <div>Ooops! There is an error.</div>

  return (
    <table className="border-collapse border border-slate-400 w-full max-w-6xl text-sm">
      <thead>
        <tr>
          <th className="border border-slate-300 p-3">ID</th>
          <th className="border border-slate-300 p-3">Name</th>
          <th className="border border-slate-300 p-3">Department</th>
          <th className="border border-slate-300 p-3">Position</th>
          <th className="border border-slate-300 p-3">Employment Type</th>
          <th className="border border-slate-300 p-3">Date hired</th>
          <th className="border border-slate-300 p-3">Created at</th>
          <th className="border border-slate-300 p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee: any, i: number) => (
          <tr key={i}>
            <td className="border border-slate-300 p-3">{ employee.id }</td>
            <td className="border border-slate-300 p-3">{ employee.firstname + " " + employee.lastname }</td>
            <td className="border border-slate-300 p-3">{ employee.department }</td>
            <td className="border border-slate-300 p-3">{ employee.position }</td>
            <td className="border border-slate-300 p-3">{ employee.employment_status }</td>
            <td className="border border-slate-300 p-3">{ moment(employee.date_hired).format('LL') }</td>
            <td className="border border-slate-300 p-3">{ moment(employee.created_at).format('LL') }</td>
            <td className="text-center border border-slate-300 p-3 space-x-1">
              <Link href={`/view/${ employee.id }`}>
                <a className="w-full max-w-[5rem] px-3 py-1 rounded-md text-xs bg-green-400 text-white outline-none transition ease-in-out duration-200 hover:bg-opacity-50">
                  View
                </a>
              </Link>
              <Link href={`/edit/${ employee.id }`}>
                <a className="w-full max-w-[5rem] px-3 py-1 rounded-md text-xs bg-orange-400 text-white outline-none transition ease-in-out duration-200 hover:bg-opacity-50">
                  Edit
                </a>
              </Link>
              <button
                type="button"
                className="w-[4rem] px-3 py-1 rounded-md text-xs bg-red-600 text-white outline-none transition ease-in-out duration-200 hover:bg-opacity-50"
                onClick={() => {
                  deleteEmployee.mutate({
                    id: employee.id
                  },
                  {
                    onSuccess() {
                      console.log('Deleted Successfully')
                    }
                  })
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table