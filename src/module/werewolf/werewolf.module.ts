import { Module } from "@nestjs/common";
import { WerewolfController } from "./werewolf.controller";
import { WerewolfService } from "./werewolf.service";

@Module({
  controllers: [WerewolfController],
  providers: [WerewolfService]
})
export class WerewolfModule {

}