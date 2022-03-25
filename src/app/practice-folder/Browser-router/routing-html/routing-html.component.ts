import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-html',
  templateUrl: './routing-html.component.html',
  styleUrls: ['./routing-html.component.css']
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
