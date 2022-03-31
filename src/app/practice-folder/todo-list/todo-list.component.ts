import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations/animations.component'; 

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations:[
    fade
  ]
})
export class TodoListComponent implements OnInit {
  heading="Todo-List"
  public newTask:string
  // public newTaskk:string
  show:boolean = false
  showInput:boolean = false
  clearActive:boolean = false

  public items:any=[ 
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
  ]
  title:string
  
  constructor() { }

  ngOnInit() {
    
  }
  clearIcon(event:any) {
    const inputValue = event.target.value
    if (inputValue.length == 6 || inputValue.length >= 6) {
      this.clearActive = true
    } else {
      this.clearActive = false
    }
  }
  clearInput() {
    this.newTask = "";
    this.clearActive = false
  }
  addTodo() {
    if (this.newTask === "" || this.newTask === null) {
      this.show = true
      this.showInput =true
    } else {
      // this.items.push({title:this.newTask,name:this.newTaskk});
      this.items.push({title:this.newTask})
      this.newTask=""
      this.show = false
      this.showInput = false
      this.clearActive = false
    }
  }
  remove(index:any) {
    this.items.splice(index,1)
  }
  edit(i:any) {
    let edit = this.items[i].title
    let result = prompt("edit task",edit)
    if (result !== null || result !== "") {
      this.items[i].title = result
    }
  }
}



