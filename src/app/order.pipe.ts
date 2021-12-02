import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: Array<any>, args: any[]): any {
    value.sort((a: any,b: any)=>{
      let x=a.nom.toLowerCase();
      let y=b.nom.toLowerCase();
      if(x<y){
        return -1;
      }else{
        return 1;
      }
      return 0;
    });
    return value;
  }

}
