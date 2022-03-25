import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  example="ng Switch example"
  cardEx="ng Switch"

  constructor() { }

  ngOnInit() {
  }

  num:number = 0;
}
