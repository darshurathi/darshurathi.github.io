import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'shorten'
})
export class ShortenPipe  implements PipeTransform{
 /* transform(value:any)
  { 
      if(value.length>10)
      {
        return value.substr(0,10) +' ....';
      }
     
      return value;
  }*/


  transform(value:any , limit:number , lastString:string)
  {
      if(value.length>limit)
      {
          return value.substr(0,limit)+ ' ....' + lastString;
      }

      return value;
  }
}