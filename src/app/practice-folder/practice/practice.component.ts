import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-practice]',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})

export class PracticeComponent implements OnInit {


  ngOnInit() {
  }

  firstName="rahul"
  lastName="katkuri"
  title="example"
  disable=true
  clickCount=0
  clickCount1=0
  clickCount2=0
  clickPlus() {
    this.clickCount++
  }
  clickMinus() {
    this.clickCount--
  }
  clickMe() {
    this.clickCount2++
  }
  name="";
  clearName() {
    this.name= ""
  }
}
