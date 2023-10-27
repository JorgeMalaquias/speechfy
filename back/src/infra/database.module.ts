import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/application/repositories/notification-repository';
import { PrismaService } from './database/prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
