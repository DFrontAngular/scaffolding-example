import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'example',
})
export class ExamplePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('ExamplePipe transform called with value:', value, 'and args:', args);
    return null;
  }
}
