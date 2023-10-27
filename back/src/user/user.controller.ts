import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:user_Id')
  login(@Param('user_Id') id: number): User {
    return this.userService.getInfo(id);
  }
  @Post('/')
  create(@Body() user: User): void {
    this.userService.create(user);
  }
}
