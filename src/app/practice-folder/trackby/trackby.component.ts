import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css']
})
export class TrackbyComponent implements OnInit {
  title:String="Top 5 movies"
  movies=[]
  mTitle:string=''
  mDirector:string=''

  constructor() { }

  ngOnInit() {
    this.refresh()
  }
 
  refresh() {
    console.log("refresh")
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore'},
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder'},
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo'},
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer'},
      { title: 'Warcraft', director: 'Duncan Jones'},
    ]
  }
  remove(r:any) {
    this.movies.splice(r,1)
  }
  addMovie() {
    this.movies.push({title:this.mTitle, director:this.mDirector})
    this.mTitle='';
    this.mDirector=''
  }
}
class Movie {
  title:string;
  director:string;
}
