import { User } from '@prisma/client';
import { UserRepository } from 'src/user/userRepository';

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];
  async create(user: User): Promise<void> {
    await this.users.push(user);
  }
  async findUnique(id: string): Promise<User> {
    return (await this.users.find((user) => user.id === id)) ?? null;
  }
}
