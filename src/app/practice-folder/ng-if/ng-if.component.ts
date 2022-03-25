import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  condition:boolean=false
  show() {
    this.condition = !this.condition
  }

  condition1: boolean=false
  
  show1() {
    this.condition1 = !this.condition1
  }

  condition2:boolean=true
  show2() {
    this.condition2 = !this.condition2
  }

}
