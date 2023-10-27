import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from './userRepository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async getInfo(id: string): Promise<User> {
    return await this.userRepository.findUnique(id);
  }
  async create(user: User): Promise<void> {
    await this.userRepository.create(user);
  }
}
