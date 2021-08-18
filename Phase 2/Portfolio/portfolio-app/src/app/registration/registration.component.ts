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
  regRef = new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  });
  constructor(private router:Router){}
  ngOnInit(): void {
  }

  regUser(){
    let register = this.regRef.value;
    console.log("new username :" + register.username);
    console.log("new pass :" + register.password);
    sessionStorage.setItem('newUsername', register.username);
    sessionStorage.setItem('newPassword', register.password);
    this.router.navigate(["login"]);
  }
}
