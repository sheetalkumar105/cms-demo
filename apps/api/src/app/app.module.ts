import { Module } from '@nestjs/common';
import { DatabaseModule } from '@cms-demo/database';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { resolve } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: resolve(__dirname, "../.env"),
    }),
    DatabaseModule
  ],
  providers: [ConfigService],
})
export class AppModule {}
