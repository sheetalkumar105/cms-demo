import { Column, DataType, Table } from "sequelize-typescript";
import { BaseModel } from "./base.model";

@Table({tableName:'otps'})
export class Otp extends BaseModel{
    @Column(DataType.STRING)
    otp:string;

    @Column(DataType.STRING)
    email:string;

}
