import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Employee from 'App/Models/Employee'

export default class EmployeeSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Employee.createMany([
      {
        firstname: 'Richlyn',
        lastname: 'Hermosilla',
        birthdate: new Date('05-31-2003'),
        gender: 'Female',
        marital_status: 'Single',
        department: 'Admin', // Admin, Engineering, Finance
        position: 'HR',
        date_hired: new Date('07-05-2022'),
        employment_status: 'Probationary', // Casual, Probationary, Regular
        contact_number: '09558398008',
        email: 'richlynhermosilla@outlook.com',
        address: 'Brgy. Ponong',
        city: 'Matalom',
        province: 'Leyte',
        nationality: 'Filipino'
      },
      {
        firstname: 'Jerome',
        lastname: 'Villaruel',
        birthdate: new Date('09-13-1998'),
        gender: 'Male',
        marital_status: 'Single',
        department: 'Engineering', // Admin, Engineering, Finance
        position: 'Software Engineer',
        date_hired: new Date('01-05-2021'),
        employment_status: 'Regular', // Casual, Probationary, Regular
        contact_number: '09753286466',
        email: 'jeromevillaruel1998@gmail.com',
        address: 'Brgy. Guerrero',
        city: 'Bato',
        province: 'Leyte',
        nationality: 'Filipino'
      }
    ])
  }
}
