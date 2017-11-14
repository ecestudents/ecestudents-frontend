import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cd'
})
export class CloudinaryPipe implements PipeTransform {

  transform(id, options): any {
    let newurl = 'https://res.cloudinary.com/ece/image/upload/f_auto,q_auto';

    if (options){
      newurl += ','+options;
    }
    newurl += '/'+id

    return newurl;
  }
}