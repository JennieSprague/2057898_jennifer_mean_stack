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
    constructor(public router:Router, public activeRoute:ActivatedRoute) { 
      this.activeRoute.params.subscribe(data=>this.username=data.user.username);
      console.log(this.username);
      this.activeRoute.params.subscribe(data=>this.password=data.user.password);
      console.log(this.password);
    } //DI
    
    // constructor(public activeRoute:ActivatedRoute) { 
    //   this.activeRoute.params.subscribe(data=>this.user=data.uname);
    // } 

  ngOnInit(): void {
  }
  checkUser(){
    let login = this.loginRef.value;
    // if (sessionStorage.length>0){
    //   //let checkout_cart = JSON.parse(localStorage.getItem("cart"));
    //   let newUser  = sessionStorage.getItem("newUser");
    //   if (newUser != null) newUser  = JSON.parse(newUser);
    //   let newlyRegistered = new User(newUser.username, newUser.password);
    //   this.users.push(newUser);
    // }
    if (sessionStorage.length>0){
      let newUsername:string = JSON.parse(sessionStorage.getItem('newUsername') || '{}');
      let newPassword:string = JSON.parse(sessionStorage.getItem('newPassword') || '{}');
      let newUser = new User(newUsername, newPassword); 
      this.users.push(newUser);
    }
    // if(login.user=="Raj" && login.pass=="123"){
    //       this.router.navigate(["home",login.user]);  // appended name through path
          
    // } 
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
    for(var x = 0; x < this.users.length; x++) {
        var current = this.users[x];
        if(current.username === user.username && current.password === user.password) {
            return true;
        }
    }
    return false;
  };
}