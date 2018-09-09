import {Input, Pipe, PipeTransform} from '@angular/core';
import {Cat} from '../cats-storage.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Cat[], filterField: string, filterValue: string): any {
    return array.filter((cat) => (cat[filterField].toUpperCase()).indexOf(filterValue.toUpperCase()) !== -1);
  }
}
