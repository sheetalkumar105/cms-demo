import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { LoginDto, RegistrationDto } from './dto/auth.dto';
import { User } from '@models/user.model';
import { hash, compare, genSalt } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@config';

@Injectable()
export class AuthService {
  constructor( @Inject(forwardRef(() => JwtService)) private readonly jwt: JwtService,
  private config: ConfigService) {}
  
  async login(body: LoginDto, {ip, ua}: any) {
    const user = await this.validate(body.email, body.password);
    if (!user) {
      throw new HttpException("Invalid Credentials", 400);
    }
    if (!user.status) {
      throw new HttpException("Account Blocked", 403);
    }
    const token = this.getTokens(user, ip, ua);
    return {
      user,
      ...token
    };
  }

  getHash(password) {
    return hash(password, 10);
  }

  async validate(email: string, password: string) {
    const user = await User.findOne({where: { email }});
    if (!user) {
      return null; 
    }
    const paswordStatus = this.checkHash(password, user.password);
    if (paswordStatus){
      delete user.password;
      return user;
    }
  }

  register(body: RegistrationDto) {
    
    // return this.auth.create(createAuthDto);
  }

  checkHash = (
    plain: string,
    encrypted: string
  ): Promise<boolean> => {
    console.log("plain", plain);
    console.log("encrypted", encrypted);

    return compare(plain, encrypted);
  };


  private getTokens(user: User, ip: string, ua: string) {
    const payload: any = {
      ua,
      ip,
      user: {
        id: user.id,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      },
    };
    const token: string = this.jwt.sign(payload);
    const refreshToken: string = this.jwt.sign(payload, {
      expiresIn: this.config.get("JWT_REFRESH_EXPIRY"),
    });

    return {
      token,
      refreshToken,
    };
  }


}
