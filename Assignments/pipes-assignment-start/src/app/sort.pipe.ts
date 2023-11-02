import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
})
export class SortPipe implements PipeTransform {
  transform(value: any, sortProp: string): unknown {
    return value.sort((server1, server2) => {
      if (server1[sortProp] < server2[sortProp]) {
        return -1;
      }
      if (server1[sortProp] > server2[sortProp]) {
        return 1;
      }
      return 0;
    });
  }
}
