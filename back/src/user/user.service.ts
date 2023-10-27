import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  getInfo(id: number): User {
    return this.userRepository.findUnique(id);
  }
  create(user: User): void {
    this.userRepository.create(user);
  }
}
