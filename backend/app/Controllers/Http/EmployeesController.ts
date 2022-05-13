import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from 'App/Models/Employee'

export default class EmployeesController {

  // controller function for displaying all of employees
  public async show({}: HttpContextContract) {
    const employee = await Employee.all();
    return employee
  }

  // controller function for displaying all of employees
  public async showOne({ params }: HttpContextContract) {
    const employee = await Employee.find(params.id)
    return employee
  }
  
  // controller function for creating new employee
  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      'firstname',
      'lastname',
      'birthdate',
      'gender',
      'marital_status',
      'department',
      'position',
      'date_hired',
      'employment_status',
      'contact_number',
      'email',
      'address',
      'city',
      'province',
      'nationality',
    ])

    const createEmployee = await Employee.create(data);

    return response.json({ createEmployee })
  }
  
  // controller function for updating specific employee
  public async update({ params, request, response }: HttpContextContract) {
    const data = request.only([
      'firstname',
      'lastname',
      'birthdate',
      'gender',
      'marital_status',
      'department',
      'position',
      'date_hired',
      'employment_status',
      'contact_number',
      'email',
      'address',
      'city',
      'province',
      'nationality',
    ])

    const updateEmployee = await Employee.findOrFail(params.id)
    updateEmployee.merge(data)
    await updateEmployee.save()

    return response.json({ updateEmployee })
  }

  // controller function for deleting specific employee
  public async destroy({ params, response }: HttpContextContract) {
    const deleteEmployee = await Employee.findOrFail(params.id)
    await deleteEmployee.delete()

    return response.json({ deleteEmployee })
  }
}
