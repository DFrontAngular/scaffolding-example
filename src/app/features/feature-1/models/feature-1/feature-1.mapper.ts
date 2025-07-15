import {TagMapper} from '../tag/tag.mapper';
import {Feature1DTO} from './feature-1-dto.interface';
import {Feature1} from './feature-1.interface';

export class Feature1Mapper {
  // Example mapping method
  static toDto(entity: Feature1): Feature1DTO {
    return {
      id: entity.id,
      name: entity.name,
      tag: entity.tag.map((tag) => TagMapper.toDto(tag)),
      // Map other properties as needed
    };
  }

  static fromDto(dto: Feature1DTO): Feature1 {
    return {
      id: dto.id,
      name: dto.name,
      tag: dto.tag.map((tagDto) => TagMapper.fromDto(tagDto)),
      // Map other properties as needed
    };
  }
}
