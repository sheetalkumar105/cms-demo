import { BelongsTo, Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { BaseModel } from "./base.model";
import { User } from "./user.model";
import { File } from "./file.model";
import { City } from "./city.model";

@Table({ tableName: 'profiles' })
export class Profile extends BaseModel {
  @Column({ field: 'user_id', type: DataType.INTEGER, allowNull: false })
  @ForeignKey(() => User)
  userId: number;

  @Column({ field: 'profile_pic_id', type: DataType.INTEGER, allowNull: false })
  @ForeignKey(() => File)
  profilePicId: number;

  @BelongsTo(() => File)
  file: File;

  @Column({type:DataType.STRING,field:'line_1'})
  line1: string;

  @Column({type:DataType.STRING,field:'line_2'})
  line2: string;

  @Column(DataType.STRING)
  locality: string;

  @Column({ field: 'city_id', type: DataType.INTEGER })
  @ForeignKey(() => City)
  cityId: number;

  @BelongsTo(() => City)
  city: City;

  @Column(DataType.STRING)
  gender:string;

  @Column(DataType.STRING)
  qualification: string;

  @Column(DataType.STRING)
  latitude: string;

  @Column(DataType.STRING)
  longitude: string;

  @Column({type:DataType.STRING,field:'linkedIn_url'})
  linkedInUrl: string;

  @Column({type:DataType.STRING,field:'facebook_url'})
  facebookUrl: string;

  @Column(DataType.INTEGER)
  zip: number;

  @BelongsTo(() => User)
  user: User;


}
