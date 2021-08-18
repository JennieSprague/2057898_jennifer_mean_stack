import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';

@Component({
  
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  // @Output() redirect:EventEmitter<User> = new EventEmitter<User>();
  @Output() newUserEvent = new EventEmitter<User>();

    data:any = {text: "example"};
    newUser  = new User("","");
    constructor(private router:Router){}

  regRef = new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  });

  ngOnInit(): void {
  }

  regUser(username:string, password:string ){
    //let register = this.regRef.value;
    // let newUser = new User(username, password);
    // this.newUserEvent.emit(this.newUser);
    sessionStorage.setItem("newUsername", username);
    sessionStorage.setItem("newPassword", password);
    //sessionStorage.setItem("newUser", newUser.toString());
    // this.router.navigate(["login:/user", newUser]); 
    this.router.navigate(["login"]);
  }
}
