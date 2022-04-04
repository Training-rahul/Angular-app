import { Directive,Input,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]'
})
export class CustomDirectivesDirective implements OnInit {

  @Input() appCustomDirectives:string

  constructor(private el:ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.classList.add(this.appCustomDirectives);
  }

}
