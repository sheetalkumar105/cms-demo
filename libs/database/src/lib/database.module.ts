import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigService } from '@config';
import { User } from '@models/user.model';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [],
      useFactory: (config: ConfigService) => {
        return {
          dialect: 'postgres',
          host: config.get('PG_HOST') || '127.0.0.1',
          port: config.get('PG_PORT') || 5432,
          username: config.get('PG_USERNAME') || 'root',
          password: config.get('PG_PASSWORD') || '',
          database: config.get('PG_DATABASE') || 'demo',
          autoLoadModels: true,
          models: [
            User
          ],
          define: {
            timestamp: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: false,
            underscored: true,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
