import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from 'App/Models/Employee'

export default class EmployeesController {

  // controller function for displaying all of employees
  public async show({}: HttpContextContract) {
    const employee = await Employee.all();
    return employee
  }
  
  // controller function for creating new employee
  public async store({ request }: HttpContextContract) {
    const employee = new Employee();
    employee.firstname = request.input('firstname');
    employee.lastname = request.input('lastname');
    employee.birthdate = request.input('birthdate');
    employee.gender = request.input('gender');
    employee.marital_status = request.input('marital_status');
    employee.department = request.input('department');
    employee.position = request.input('position');
    employee.date_hired = request.input('date_hired');
    employee.employment_status = request.input('employment_status');
    employee.contact_number = request.input('contact_number');
    employee.email = request.input('email');
    employee.address = request.input('address');
    employee.city = request.input('city');
    employee.province = request.input('province');
    employee.nationality = request.input('nationality');

    const save = await employee.save();

    if (save) {
      return {
        status: 200
      }
    }
  }
  
  // controller function for updating specific employee
  public async modify({}: HttpContextContract) {}

  // controller function for deleting specific employee
  public async destroy({}: HttpContextContract) {}
}
