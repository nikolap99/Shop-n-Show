import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDesc'
})
export class ShortDescPipe implements PipeTransform {
  transform(value: string, length: number): any {
    return value.substring(0, length);
  }
}
