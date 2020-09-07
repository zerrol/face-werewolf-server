import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiPropertyOptional()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  openId: string

  @ApiProperty()
  @Column()
  nickName?: string

  @ApiProperty()
  @Column()
  wxNickName: string;

  @ApiProperty()
  @Column()
  avatarUrl: string;
}