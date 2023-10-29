import { Module } from '@nestjs/common';
import { RecordRepository } from 'src/application/record/recordRepository';
import { UserRepository } from 'src/application/user/userRepository';
import { PrismaService } from './database/prisma/prisma.service';
import { PrismaRecordRepository } from './database/repositories/prismaRecordRepository';
import { PrismaUserRepository } from './database/repositories/prismaUserRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: RecordRepository,
      useClass: PrismaRecordRepository,
    },
  ],
  exports: [UserRepository, RecordRepository],
})
export class DatabaseModule {}
