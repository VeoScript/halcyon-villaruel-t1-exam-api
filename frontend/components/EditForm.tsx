import React from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { useEditEmployee } from '../lib/ReactQuery'

interface IProps {
  employee: any
}

interface FormData {
  firstname: string
  lastname: string
  birthdate: string
  gender: string
  marital_status: string
  department: string
  position: string
  date_hired: string
  employment_status: string
  contact_number: string
  email: string
  address: string
  city: string
  province: string
  nationality: string
}

const EditForm: React.FC<IProps> = ({ employee }) => {

  const editEmployee = useEditEmployee()

  const { handleSubmit, register, reset, setValue, formState: { isSubmitting } } = useForm<FormData>()
  
  React.useEffect(() => {
    setValue('firstname', employee.firstname)
    setValue('lastname', employee.lastname)
    setValue('birthdate', new Date(employee.birthdate).toISOString().substring(0, 10))
    setValue('gender', employee.gender)
    setValue('marital_status', employee.marital_status)
    setValue('department', employee.department)
    setValue('position', employee.position)
    setValue('date_hired', new Date(employee.date_hired).toISOString().substring(0, 10))
    setValue('employment_status', employee.employment_status)
    setValue('contact_number', employee.contact_number)
    setValue('email', employee.email)
    setValue('address', employee.address)
    setValue('city', employee.city)
    setValue('province', employee.province)
    setValue('nationality', employee.nationality)
  }, [setValue, employee])

  const handleEditEmployee = async (formData: FormData) => {
    const id = employee.id
    const firstname = formData.firstname
    const lastname = formData.lastname
    const birthdate = formData.birthdate
    const gender = formData.gender
    const marital_status = formData.marital_status
    const department = formData.department
    const position = formData.position
    const date_hired = formData.date_hired
    const employment_status = formData.employment_status
    const contact_number = formData.contact_number
    const email = formData.email
    const address = formData.address
    const city = formData.city
    const province = formData.province
    const nationality = formData.nationality

    editEmployee.mutate({
      id: String(id),
      firstname: String(firstname),
      lastname: String(lastname),
      birthdate: String(birthdate),
      gender: String(gender),
      marital_status: String(marital_status),
      department: String(department),
      position: String(position),
      date_hired: String(date_hired),
      employment_status: String(employment_status),
      contact_number: String(contact_number),
      email: String(email),
      address: String(address),
      city: String(city),
      province: String(province),
      nationality: String(nationality)
    },
    {
      onSuccess() {
        console.log('Updated Successfully')
        reset()
        Router.push('/')
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(handleEditEmployee)} className="inline-flex justify-center w-full pb-10 max-w-3xl">
      <div className="flex flex-col w-full space-y-2">
        <div className="block w-full">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            className="flex w-full p-3 outline-none border border-zinc-400 focus:border-blue-500"
            {...register('firstname', { required: true })}
          />
        </div>
        <div className="block w-full">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            className="flex w-full p-3 outline-none border border-zinc-400 focus:border-blue-500"
            {...register('lastname', { required: true })}
          />
        </div>
        <div className="block w-full">
          <label htmlFor="birthdate">Birthdate</label>
          <input
            type="date"
            id="birthdate"
            className="flex w-full p-3 outline-none cursor-pointer bg-white border border-zinc-400 focus:border-blue-500"
            {...register('birthdate', { required: true })}
          />
        </div>
        <div className="flex flex-col w-full space-y-1 py-2.5">
          <label htmlFor="gender">Gender</label>
          <div className="inline-flex items-center w-full space-x-3">
            <input type="radio" id="gender" value="Male" {...register('gender', { required: true })} />&nbsp;Male
            <input type="radio" id="gender" value="Female" {...register('gender', { required: true })} />&nbsp;Female
          </div>
        </div>
        <div className="block w-full">
          <label htmlFor="marital_status">Marital Status</label>
          <select 
            id="marital_status"
            className="flex w-full p-3 outline-none cursor-pointer bg-white border border-zinc-400 focus:border-blue-500"
            {...register('marital_status', { required: true })}
          >
            <option value=""></option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widowed">Widowed</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>
        <div className="block w-full">
          <label htmlFor="department">Department</label>
          <select 
            id="department"
            className="flex w-full p-3 outline-none cursor-pointer bg-white border border-zinc-400 focus:border-blue-500"
            {...register('department', { required: true })}
          >
            <option value=""></option>
            <option value="Admin">Admin</option>
            <option value="Engineering">Engineering</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        <div className="block w-full">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            className="flex w-full p-3 outline-none border border-zinc-400 focus:border-blue-500"
            {...register('position', { required: true })}
          />
        </div>
        <div className="block w-full">
          <label htmlFor="date_hired">Date Hired</label>
          <input
            type="date"
            id="date_hired"
            className="flex w-full p-3 outline-none cursor-pointer bg-white border border-zinc-400 focus:border-blue-500"
            {...register('date_hired', { required: true })}
          />
        </div><div className="block w-full">
          <label htmlFor="employment_status">Employment Status</label>
          <select 
            id="employment_status"
            className="flex w-full p-3 outline-none cursor-pointer bg-white border border-zinc-400 focus:border-blue-500"
            {...register('employment_status', { required: true })}
          >
            <option value=""></option>
            <option value="Casual">Casual</option>
            <option value="Probationary">Probationary</option>
            <option value="Regular">Regular</option>
          </select>
        </div>
        <div className="block w-full">
          <label htmlFor="contact_number">Contact Number</label>
          <input
            type="tel"
            id="contact_number"
            className="flex w-full p-3 outline-none border border-zinc-400 focus:border-blue-500"
            {...register('contact_number', { required: true })}
          />
        </div>
        <div className="block w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="flex w-full p-3 outline-none border border-zinc-400 focus:border-blue-500"
            {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
          />
        </div>
        <div className="block w-full">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            className="flex w-full p-3 outline-none border border-zinc-400 focus:border-blue-500"
            {...register('address', { required: true })}
          />
        </div>
        <div className="block w-full">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            className="flex w-full p-3 outline-none border border-zinc-400 focus:border-blue-500"
            {...register('city', { required: true })}
          />
        </div>
        <div className="block w-full">
          <label htmlFor="province">Province</label>
          <input
            type="text"
            id="province"
            className="flex w-full p-3 outline-none border border-zinc-400 focus:border-blue-500"
            {...register('province', { required: true })}
          />
        </div>
        <div className="block w-full">
          <label htmlFor="nationality">Nationality</label>
          <input
            type="text"
            id="nationality"
            className="flex w-full p-3 outline-none border border-zinc-400 focus:border-blue-500"
            {...register('nationality', { required: true })}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full p-3 outline-none text-white bg-blue-600 hover:bg-opacity-50 transition ease-in-out duration-200"
        >
          Save Changes
        </button>
      </div>
    </form>
  )
}

export default EditForm