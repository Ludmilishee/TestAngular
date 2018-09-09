import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(age: any): string {
    if (age === 1) {
      return age + ' год';
    } else if (age < 5) {
      return age + ' года';
    } else {
      return age + ' лет';
    }
  }

}
