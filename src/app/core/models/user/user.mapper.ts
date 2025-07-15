import {UserDTO} from './user-dto.interface';
import {User} from './user.interface';

export class UserMapper {
  // Example mapping method
  static toDto(entity: User): UserDTO {
    return {
      backendProp: entity.frontendProp,
      // Map other properties as needed
    };
  }

  static fromDto(dto: UserDTO): User {
    return {
      frontendProp: dto.backendProp,
      // Map other properties as needed
    };
  }
}
