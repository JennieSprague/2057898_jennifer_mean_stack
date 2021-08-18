import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
    
    loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
    
  });
  users :Array<User>=new Array();
  msg:string=""
  username?:string=""
  password?:string=""
  constructor(public router:Router) {} //DI

  ngOnInit(): void {
  }
  checkUser(){
    let login = this.loginRef.value;
    console.log(this.users);
    if (sessionStorage.length>0){
      console.log("checking session storage");
      let newUsername:string="";
      let newPassword:string="";
      // let newUsername:string = JSON.parse(sessionStorage.getItem('newUsername') || '{}');
      // let newPassword:string = JSON.parse(sessionStorage.getItem('newPassword') || '{}');
      // sessionStorage.clear();
      if (sessionStorage.getItem('newUsername')) {
        // Restore the contents of the text field
        newUsername = sessionStorage.getItem('newUsername') ||'{}';
      }
      if (sessionStorage.getItem('newPassword')) {
        // Restore the contents of the text field
        newPassword = sessionStorage.getItem('newPassword')||'{}';
      }
      let newUser = new User(newUsername, newPassword); 
      this.users.push(newUser);
    }
    console.log(this.users);
    if(login.user=="Raj" && login.pass=="123"){
          this.router.navigate(["home",login.user]);  // appended name through path
    } 
    let loginUser = new User(login.user, login.pass);
    if (this.isExist(loginUser)){
      this.router.navigate(["home",login.user]);
    }
    else {
        this.msg  = "InValid username or password";
    }
    this.loginRef.reset();   
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