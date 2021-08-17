import { User } from './../user';
// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Router} from '@angular/router';

// @Component({
//   selector: 'app-tdf-login-page',
//   templateUrl: './tdf-login-page.component.html',
//   styleUrls: ['./tdf-login-page.component.css']
// })
// export class TdfLoginPageComponent implements OnInit {
//   msg:string = "";

//   constructor(public router:Router) { } //DI

//   ngOnInit(): void {
//   }

//   checkUser(loginRef:NgForm){
//     let login = loginRef.value;
//     //console.log(login);
//     if(login.user=="Raj" && login.pass=="123"){
//         this.msg = "Successfully Login!"
//         this.router.navigate(["home"]);  // appended name through path
//     }else {
//         this.msg = "Failure try once again!";
//     }
//     loginRef.reset();
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
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
    constructor(public router:Router) { } //DI
  ngOnInit(): void {
  }
  checkUser(){
    let login = this.loginRef.value;
    if(login.user=="Raj" && login.pass=="123"){
          this.router.navigate(["home",login.user]);  // appended name through path
          
    } else {
        this.msg  = "InValid username or password";
    }
    this.loginRef.reset();   
  }
  isExist (user:User) {
    for(var x = 0; x < this.users.length; x++) {
        var current = this.users[x];
        if(current.username === user.username && current.password === user.password) {
            return true;
        }
    }
    return false;
  };
}