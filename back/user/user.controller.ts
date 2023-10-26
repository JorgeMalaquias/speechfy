import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Post('/')
  create(): string {
    return this.userService.register();
  }

  @Post('/:user_Id')
  login(@Param('user_Id') id: string): string {
    return this.userService.login(id);
  }
}
