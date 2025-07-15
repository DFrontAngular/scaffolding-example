import {Feature1} from './feature-1.interface';

export function createFeature1(override: Partial<Feature1> = {}): Feature1 {
  const defaultFeature1: Feature1 = {
    id: 1,
    name: 'Feature 1',
  };

  return {
    ...defaultFeature1,
    ...override,
  };
}
