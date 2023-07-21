import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Req,
  Res,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //  @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  @Post('login')
  async login(@Body() body: LoginDto, @Req() req: Request) {
    try{
      const user = await this.authService.login(body, req);
      return {
        status: 'success',
        message: 'Login successful',
        data: user,
      };
    } catch (e){
      console.log(e.status);
      // res.status(HttpStatus.BAD_REQUEST).send("saving " + JSON.stringify(body));;
      // console.log("e",e);
      return {
        status: 'false',
        message: e.message,
        data: null,
      };
    }
  }

  @Get('hash')
  async hash(@Query() param) {
    return this.authService.getHash(param.password);
  }
}


