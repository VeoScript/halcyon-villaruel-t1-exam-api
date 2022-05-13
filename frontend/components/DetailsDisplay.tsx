import React from 'react'
import moment from 'moment'

interface IProps {
  employee: any
}

const DetailsDisplay: React.FC<IProps> = ({ employee }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-10 space-y-10">
      <div className="flex flex-col items-center w-full space-y-5">
        <h1 className="font-bold text-5xl">{ employee.firstname + " " + employee.lastname }</h1>
        <div className="flex flex-col items-center w-full space-y-1">
          <h1 className="font-bold text-2xl">{ employee.position }</h1>
          <h1 className="font-light text-2xl">{ employee.department }</h1>
        </div>
      </div>
      <table className="border-collapse border border-slate-400 w-full max-w-7xl text-sm">
        <thead>
          <tr>
            <th className="border border-slate-300 p-3">Gender</th>
            <th className="border border-slate-300 p-3">Birthdate</th>
            <th className="border border-slate-300 p-3">Marital Status</th>
            <th className="border border-slate-300 p-3">Employment Status</th>
            <th className="border border-slate-300 p-3">Date Hired</th>
            <th className="border border-slate-300 p-3">Contact No.</th>
            <th className="border border-slate-300 p-3">Email</th>
            <th className="border border-slate-300 p-3">Address</th>
            <th className="border border-slate-300 p-3">City</th>
            <th className="border border-slate-300 p-3">Province</th>
            <th className="border border-slate-300 p-3">Nationality</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 p-3">{ employee.gender }</td>
            <td className="border border-slate-300 p-3">{ moment(employee.birthdate).format('LL') }</td>
            <td className="border border-slate-300 p-3">{ employee.marital_status }</td>
            <td className="border border-slate-300 p-3">{ employee.employment_status }</td>
            <td className="border border-slate-300 p-3">{ moment(employee.date_hired).format('LL') }</td>
            <td className="border border-slate-300 p-3">{ employee.contact_number }</td>
            <td className="border border-slate-300 p-3">{ employee.email }</td>
            <td className="border border-slate-300 p-3">{ employee.address }</td>
            <td className="border border-slate-300 p-3">{ employee.city }</td>
            <td className="border border-slate-300 p-3">{ employee.province }</td>
            <td className="border border-slate-300 p-3">{ employee.nationality }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DetailsDisplay