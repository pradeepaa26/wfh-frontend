import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'videopipe'
})
export class VideopipePipe implements PipeTransform {
constructor(private dom :DomSanitizer){

}
  transform(url: string) {
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }

}
