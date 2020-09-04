import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WerewolfService } from './module/werewolf/werewolf.service';
import { WerewolfController } from './module/werewolf/werewolf.controller';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController, WerewolfController],
  providers: [AppService, WerewolfService],
})
export class AppModule {}
