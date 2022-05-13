/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { Halcyon: 'Jerome Villaruel Exam' }
})

Route.get('/employees', 'EmployeesController.show')
Route.post('/add-employee', 'EmployeesController.store')
Route.put('/update-employee/:id', 'EmployeesController.modify')
Route.put('/delete-employee/:id', 'EmployeesController.destroy')