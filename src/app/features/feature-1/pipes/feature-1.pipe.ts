import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'feature1',
})
export class Feature1Pipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('Feature1Pipe transform called with value:', value, 'and args:', args);
    return null;
  }
}
