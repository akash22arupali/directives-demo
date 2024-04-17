import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string='transparent';
  @Input() highlightColor: string='blue';
  @HostBinding('style.backgroundColor') BackgroundColor:string=this.defaultColor;
  constructor(private rendrer: Renderer2,
    private eleRef: ElementRef) {

     }
     ngOnInit(): void {
      // this.rendrer.setStyle(this.eleRef.nativeElement,'background-color','blue');
      this.BackgroundColor=this.defaultColor;
     }

     @HostListener('mouseover') mouseover(){
      //this.rendrer.setStyle(this.eleRef.nativeElement,'background-color','blue');
      this.BackgroundColor=this.highlightColor;
     }
     @HostListener('mouseleave') mouseleave(){
    //  this.rendrer.setStyle(this.eleRef.nativeElement,'background-color','transparent');
      this.BackgroundColor=this.defaultColor;
     }
}
