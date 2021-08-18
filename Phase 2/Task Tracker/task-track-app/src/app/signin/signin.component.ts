import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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

  constructor() { }

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value
    //console.log(login);
    if(login.user=="Raj" && login.pass=="123"){
        this.msg = "Successfully Login!"
    }else {
        this.msg  = "Failure try once again..!"
    }
    this.loginRef.reset();
  }
}
