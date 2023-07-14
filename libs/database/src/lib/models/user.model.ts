import {
  Column,
  Model,
  Table,
  DataType,
  IsEmail
} from 'sequelize-typescript';



@Table
export class User extends Model {
  

  @Column(DataType.STRING)
  first_name: string;

  @Column(DataType.STRING)
  last_name: string;

  @IsEmail
  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  mobile: string;

  @Column({
    type: DataType.STRING,
  })
  password: string;

}
