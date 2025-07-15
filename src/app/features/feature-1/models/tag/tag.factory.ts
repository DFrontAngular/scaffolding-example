import {Tag} from './tag.interface';

export function createTag(overrides: Partial<Tag> = {}): Tag {
  const defaultTag: Tag = {
    id: 0,
    name: 'name',
    label: 'label',
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z',
  };

  return {
    ...defaultTag,
    ...overrides,
  };
}
