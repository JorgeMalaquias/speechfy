import { User } from '@prisma/client';
import { InMemoryUserRepository } from '../../test/repositories/inMemoryUserRepository';
import { UserService } from './user.service';

describe('User service unit tests', () => {
  it('should create a new user', async () => {
    const userRepository = new InMemoryUserRepository();
    const userService = new UserService(userRepository);
    const initialLength = userRepository.users.length;
    const newUser: User = {
      id: 'some string'.repeat(23),
      name: 'some string'.repeat(2),
      photoUrl: 'some string'.repeat(23),
    };
    await userService.create(newUser);
    const finalLength = userRepository.users.length;

    expect(finalLength).toEqual(initialLength + 1);
    expect(userRepository.users).toHaveLength(1);
    const index = userRepository.users.length - 1;
    expect(userRepository.users[index].id).toEqual(newUser.id);
  });
  it('should return the data of a user', async () => {
    const userRepository = new InMemoryUserRepository();
    const userService = new UserService(userRepository);
    const newUser: User = {
      id: 'some string'.repeat(23),
      name: 'some string'.repeat(2),
      photoUrl: 'some string'.repeat(23),
    };
    await userService.create(newUser);
    const user = await userService.findUnique(newUser.id);
    expect(user).toEqual(expect.objectContaining({ ...newUser }));
  });
  it('should return the data of a user', async () => {
    const userRepository = new InMemoryUserRepository();
    const userService = new UserService(userRepository);
    const newUser: User = {
      id: 'some string'.repeat(23),
      name: 'some string'.repeat(2),
      photoUrl: 'some string'.repeat(23),
    };
    await userService.create(newUser);
    const user = await userService.findUnique('some id'.repeat(5));
    expect(user).toEqual(expect.not.objectContaining({ ...newUser }));
    expect(user).toBeNull();
  });
});
