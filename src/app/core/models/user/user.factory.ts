import {User} from './user.interface';

export function createUser(overrides?: Partial<User>): User {
  const defaultUser: User = {
    frontendProp: 'default value',
  };

  return {...defaultUser, ...overrides};
}
