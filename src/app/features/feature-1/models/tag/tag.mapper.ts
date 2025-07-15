import {TagDTO} from './tag-dto.interface';
import {Tag} from './tag.interface';

export class TagMapper {
  // Example mapping method
  static toDto(entity: Tag): TagDTO {
    return {
      id: entity.id,
      label: entity.label,
      name: entity.name,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      // Map other properties as needed
    };
  }

  static fromDto(dto: TagDTO): Tag {
    return {
      id: dto.id,
      label: dto.label,
      name: dto.name,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
      // Map other properties as needed
    };
  }
}
