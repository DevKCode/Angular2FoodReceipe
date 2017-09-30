import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMycustomerDirective]'
})
export class MycustomerDirectiveDirective implements OnInit {

  constructor(private render: Renderer2) { }

  ngOnInit() {
    //this.render.

  }

  @HostListener('mouseEnter') mouseover() {

  }

  @HostListener('mouseOut') mouseover1() {

  }




}
