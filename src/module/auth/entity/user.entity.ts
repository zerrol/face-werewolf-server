import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  openId: string

  @Column()
  nickName?: string

  @Column()
  wxNickName: string;

  @Column()
  avatarUrl: string;
}