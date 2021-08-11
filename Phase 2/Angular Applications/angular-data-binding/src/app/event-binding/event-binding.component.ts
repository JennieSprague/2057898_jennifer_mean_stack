import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  msg:string="";
  msg2:string="msg2";
  msg3:string="msg3";
  constructor() { }

  ngOnInit(): void {
  }
  fun(){
    this.msg = "Welcome to Angular"
    console.log("Event fired");
    console.log(this.msg);
  }
}
