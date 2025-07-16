import {createTag} from '../tag/tag.factory';
import {Feature1} from './feature-1.interface';

export function createFeature1(override?: Partial<Feature1>): Feature1 {
  const defaultFeature1: Feature1 = {
    id: 1,
    name: 'Feature 1',
    tag: [createTag()],
  };

  return {
    ...defaultFeature1,
    ...override,
  };
}
