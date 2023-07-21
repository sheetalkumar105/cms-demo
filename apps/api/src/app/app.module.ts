import { Module } from '@nestjs/common';
import { DatabaseModule } from '@cms-demo/database';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { resolve } from 'path';
import { JwtModule } from '../jwt/jwt.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: resolve(__dirname, "../.env"),
    }),
    DatabaseModule,
    JwtModule,
    AuthModule
  ],
  providers: [ConfigService],
})
export class AppModule {}
