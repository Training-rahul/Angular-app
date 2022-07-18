import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { fade } from 'src/app/animations/animations.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations:[
    fade
  ]
})
export class AboutComponent implements OnInit {

  contacts:any;
  selectedContact:any;

  constructor(public dataService:ApiService) { }

  ngOnInit() {
    this.contacts = this.dataService.getContacts()
  }
  selectContact(contact:any) {
    this.selectedContact = contact
  }

}
