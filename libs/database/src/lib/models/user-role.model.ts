import { Column, DataType, Table, Model } from 'sequelize-typescript';
import { BaseModel } from './base.model';

@Table({tableName:'user_roles'})
export class UserRole extends BaseModel {
  @Column(DataType.STRING)
  role: string;

  @Column(DataType.STRING)
  discription: string;
}
