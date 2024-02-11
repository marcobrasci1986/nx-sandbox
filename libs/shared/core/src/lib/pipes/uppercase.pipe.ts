import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appUppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
