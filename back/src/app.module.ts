import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database.module';
import { RecordController } from './infra/controllers/record.controller';
import { RecordService } from './application/record/record.service';
import { UserController } from './infra/controllers/user.controller';
import { UserService } from './application/user/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController, RecordController],
  providers: [UserService, RecordService],
})
export class AppModule {}
