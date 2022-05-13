import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstname: string

  @column()
  public lastname: string

  @column()
  public birthdate: Date

  @column()
  public gender: string

  @column()
  public marital_status: string

  @column()
  public department: string

  @column()
  public position: string

  @column()
  public date_hired: Date

  @column()
  public employment_status: string

  @column()
  public contact_number: string

  @column()
  public email: string

  @column()
  public address: string

  @column()
  public city: string

  @column()
  public province: string

  @column()
  public nationality: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
