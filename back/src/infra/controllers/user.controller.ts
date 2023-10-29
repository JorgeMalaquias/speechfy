import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserDTO } from 'src/infra/DTOs/dtos';
import { UserService } from 'src/application/user/user.service';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:userId')
  async login(@Param('userId') id: string): Promise<User> {
    return await this.userService.findUnique(id);
  }
  @Post()
  async create(@Body() user: UserDTO): Promise<void> {
    await this.userService.create(user);
  }
}
