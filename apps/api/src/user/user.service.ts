import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '@models/user.model'
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
   constructor(
    @InjectModel(User) private readonly user: typeof User,
  ) {}
  // create(createUserDto:CreateUserDto) {   //why not get type 
  create(createUserDto) {
    return this.user.create(createUserDto)
  }

  findAll() {
    return this.user.findAll();
  }

  findOne(id: number) {
    return this.user.findOne(
      {where:{
        id:id}});
  }

  update(id: number, updateUserDto:UpdateUserDto) {
    return this.user.update(updateUserDto,{
      where:{
        id:id
      }
    });
  }

  remove(id: number) {
    return this.user.destroy(
      {
        where:{
          id:id
        }
      }
    );
  }
}
