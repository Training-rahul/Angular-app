import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts:any;

  constructor(public dataService: ApiService) { }

  ngOnInit() {
    this.contacts = this.dataService.getContacts()
  }

}
