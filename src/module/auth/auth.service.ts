import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findUserByOpenId(openId: string) {
    return await this.usersRepository.findOne({ openId })
  }

  async saveUser(user: User) {
    await this.usersRepository.save(user)
  }

  getAuth() {
    return 'hello auth'
  }
}
