import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginRef = new FormGroup({
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })
  msg:string=""
  users :Array<User>=new Array();

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value
    if (sessionStorage.length>0){
      console.log("checking session storage");
      let newUsername:string="";
      let newPassword:string="";
      if (sessionStorage.getItem('newUsername')) {
        newUsername = sessionStorage.getItem('newUsername') ||'{}';
      }
      if (sessionStorage.getItem('newPassword')) {
        newPassword = sessionStorage.getItem('newPassword')||'{}';
      }
      sessionStorage.clear();
      let newUser = new User(newUsername, newPassword); 
      this.users.push(newUser);
      let loginUser = new User(login.user, login.pass);
      if (this.isExist(loginUser)){
        console.log("signed in");
        this.router.navigate(["task-list",login.user]);
      }
      else {
          this.msg  = "InValid username or password";
      }
    
    this.loginRef.reset();
    }
  }
  isExist (user:User) {
    for(let x = 0; x < this.users.length; x++) {
        let current = this.users[x];
        if(current.username === user.username && current.password === user.password) {
            return true;
        }
    }
    return false;
  };
}
