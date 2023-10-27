import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database.module';
import { AppController } from './initialFolders/app.controller';
import { AppService } from './initialFolders/app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
