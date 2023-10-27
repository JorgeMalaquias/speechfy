import { Module } from '@nestjs/common';
import { RecordRepository } from 'src/record/recordRepository';
import { UserRepository } from 'src/user/userRepository';
import { PrismaService } from './database/prisma/prisma.service';
import { PrismaRecordRepository } from './repositories/prismaRecordRepository';
import { PrismaUserRepository } from './repositories/prismaUserRepository';

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
