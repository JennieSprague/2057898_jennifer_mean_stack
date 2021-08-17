import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';
import { Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regRef = new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  });

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  regUser(username:string, password:string ){
    //let register = this.regRef.value;
    let newUser = new User(username, password);
    this.router.navigate(["login"]); 
  }

}
