import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

@Entity()
export class Room {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  // 游戏角色：平民、狼人、女巫等  
  @ApiProperty()
  roles: Symbol[]

  @ApiProperty()
  @Column()
  ownerUserId: number
}