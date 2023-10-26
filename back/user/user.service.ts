import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'user route!';
  }
  register(): string {
    return 'registered';
  }
  login(id: string): string {
    return `You send this id : ${id}`;
  }
}
