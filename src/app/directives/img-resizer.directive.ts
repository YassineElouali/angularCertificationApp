import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appImgResizer]'
})
export class ImgResizerDirective {


  @HostBinding('style.width') styleWidth = '30px';

  @HostBinding('style.height') styleHeight = '30px';



}
