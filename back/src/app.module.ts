import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database.module';
import { RecordController } from './record/record.controller';
import { RecordService } from './record/record.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController, RecordController],
  providers: [UserService, RecordService],
})
export class AppModule {}
