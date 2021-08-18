import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contacts:Array<Contact>=new Array();

  user?:string=""
  //DI  for ActivatedRoute 
  
  constructor(public activeRoute:ActivatedRoute) { 
    this.activeRoute.params.subscribe(data=>this.user=data.uname);
  } 

  ngOnInit(): void {
  }
  
  addContact(name:string, phone:string){
    let newContact = new Contact(name, phone);
    this.contacts.push(newContact);
  }
}
