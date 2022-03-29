import { Component, OnInit } from '@angular/core';
import { slideInAnimation, fader, stepper } from 'src/app/animations/animations.component'; 

@Component({
  selector: 'app-routing-html',
  templateUrl: './routing-html.component.html',
  styleUrls: ['./routing-html.component.css'],
  animations: [ 
    // slideInAnimation,
    // fader,
       stepper
  ]
})
export class RoutingHtmlComponent implements OnInit {

  public show:boolean = false
  public menuIcon:boolean=false

  toggle() {
    this.menuIcon = !this.menuIcon
    this.show = !this.show
  }
  closeBar() {
    this.show =! this.show
    this.menuIcon =! this.menuIcon
  }

  constructor() { }

  ngOnInit() {
  }

}
