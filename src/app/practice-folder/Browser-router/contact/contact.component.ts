import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contact: {id:number,name:any,description:any,email:any} = {id:null,name:"",description:"",email:""}

  constructor(public dataService:ApiService) {}

  ngOnInit() {
  }

  createContact() {
    this.dataService.createContact(this.contact);
    this.contact = {id:null, name:"",description:"",email:""}
  }
}
