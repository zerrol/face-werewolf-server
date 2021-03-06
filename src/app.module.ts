import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './module/auth/auth.module';
import { WerewolfModule } from './module/werewolf/werewolf.module';
import { Connection } from 'typeorm';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'adminadmin',
      database: 'test2',
      // entities: ['**/*.entity.ts'],
      // entities: [User, RoomInfo],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    WerewolfModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
