import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, filterProp: string): unknown {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const result = [];
    for (const item of value) {
      if (item[filterProp] === filterString) {
        result.push(item);
      }
    }
    return result;
  }
}
