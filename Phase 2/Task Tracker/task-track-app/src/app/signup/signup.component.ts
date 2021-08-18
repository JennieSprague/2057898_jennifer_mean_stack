import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  regRef = new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  });
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  regUser(){
    let register = this.regRef.value;
    console.log("new username :" + register.username);
    console.log("new pass :" + register.password);
    sessionStorage.setItem('newUsername', register.username);
    sessionStorage.setItem('newPassword', register.password);
    this.router.navigate(["signin"]);
  }
}
