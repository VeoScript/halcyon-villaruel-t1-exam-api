import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Employees extends BaseSchema {
  protected tableName = 'employees'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('firstname').notNullable()
      table.string('lastname').notNullable()
      table.date('birthdate').notNullable()
      table.string('gender').notNullable()
      table.string('marital_status').notNullable()
      table.string('department').notNullable()
      table.string('position').notNullable()
      table.date('date_hired').notNullable()
      table.string('employment_status').notNullable()
      table.string('contact_number').notNullable()
      table.string('email').notNullable()
      table.string('address').notNullable()
      table.string('city').notNullable()
      table.string('province').notNullable()
      table.string('nationality').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true) // kung MySQL ang yong gamit use timestamps(true, true) it will automatically created_at and updated_at
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
