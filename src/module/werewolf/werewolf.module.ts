import { Module } from '@nestjs/common';
import { WerewolfController } from './werewolf.controller';
import { WerewolfService } from './werewolf.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entity/Room';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  controllers: [WerewolfController],
  providers: [WerewolfService],
})
export class WerewolfModule {}
