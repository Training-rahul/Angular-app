import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title="Top 5 Movies"
  getData() {
    
  }
  movies:names[] = [
    {id:1,name:'rahul',budget:380,email:'rahul@'},
    {id:2,name:'harish',budget:300,email:'harish@'},
    {id:3,name:'rrr',budget:380,email:'rrr@'},
    {id:4,name:'radheshyam',budget:300,email:'radheshyam@'},
  ]
}
class names {
  id:number;
  name:string;
  budget:number;
  email:string;
}

 
