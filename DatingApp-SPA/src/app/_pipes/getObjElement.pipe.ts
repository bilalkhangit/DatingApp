import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "getObjElement"
})
export class GetObjElementPipe implements PipeTransform {
  transform(object: any, prop: any): any {
    let el: any;
    Object.keys(object).forEach(key => {
      if (prop === key) {
        el = object[key];
      }
    });
    return el;
  }
}
