import {TagDTO} from '../tag/tag-dto.interface';

export interface Feature1DTO {
  id: number;
  name: string;
  tag: TagDTO[];
  // Add other properties as needed
}
