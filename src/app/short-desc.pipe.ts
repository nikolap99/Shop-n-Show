import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDesc'
})
export class ShortDescPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let [length, isShort] = [...args];
    if (isShort) {
      return `${value.substring(0, length)}...`;
    } else if (isShort === false) {
      return value;
    }
  }
}
