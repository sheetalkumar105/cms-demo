import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from './base.model';
import { UserRole } from './user-role.model';


@Table({tableName:'users'})
export class User extends BaseModel {
  
  @Column({type:DataType.STRING,field:'first_name'})
  firstName: string;

  @Column({type:DataType.STRING,field:'last_name'})
  lastName: string;

  // @IsEmail
  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  mobile: string;

  @Column({
    type: DataType.STRING,
  })
  password: string;

  @ForeignKey(() => UserRole)
  @Column({type:DataType.INTEGER,field:'role_id'})
  roleId: number;

  @BelongsTo(() => UserRole)
  role: UserRole;

}

