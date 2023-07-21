import { Column, DataType, Model, PrimaryKey } from 'sequelize-typescript';

export class BaseModel extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id: number;

  @Column({type: DataType.DATE, field: 'created_at'})
  createdAt: Date;

  @Column({type: DataType.BOOLEAN, field: 'status'})
  status: boolean;

  @Column({type:DataType.DATE,field:'updated_at'})
  updatedAt: Date;

  @Column({type:DataType.DATE,field:'deleted_at'})
  deletedAt: Date;

  @Column({type:DataType.STRING,field:'deleted_by'})
  deletedBy: String;

  @Column({type:DataType.INTEGER,field:'created_by'})
  createdBy: number;
}
