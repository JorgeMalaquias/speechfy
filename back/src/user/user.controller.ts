import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:user_Id')
  async login(@Param('userId') id: string): Promise<User> {
    return await this.userService.getInfo(id);
  }
  @Post()
  async create(@Body() user: User): Promise<void> {
    await this.userService.create(user);
  }
}
