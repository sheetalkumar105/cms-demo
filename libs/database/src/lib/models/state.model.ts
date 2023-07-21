import { Column, DataType, HasMany, Table } from 'sequelize-typescript';
import { BaseModel } from './base.model';
import { City } from './city.model';

@Table({tableName:'states'})
export class State extends BaseModel {
  
  @Column(DataType.STRING)
  state: string;

  //@HasMany(()=>City, city=>city.state)
}
