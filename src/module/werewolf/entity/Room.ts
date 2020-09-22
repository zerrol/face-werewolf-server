import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

@Entity()
export class Room {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  sits: number

  // 游戏角色：平民、狼人、女巫等  
  @ApiProperty()
  @Column()
  roles: Symbol[]

  // members?: Member[]

  // 房主
  @ApiPropertyOptional()
  @Column()
  ownerUserId?: string

  // 调度器，负责调度游戏进行
  // 开始新的游戏，则创建新的scheduler即可
  // scheduler: Scheduler

}