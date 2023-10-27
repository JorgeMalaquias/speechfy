import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from 'src/user/userRepository';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async create(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        photoUrl: user.photoUrl,
      },
    });
  }
  async findUnique(id: string): Promise<User> {
    return await this.prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }
}
