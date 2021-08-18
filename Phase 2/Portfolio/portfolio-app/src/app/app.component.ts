import { User } from './user';
import { Component, ViewChild, Input } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-app';
  //newUser = new User("","");
  //let newUser:User;
  // newUser: User = new User("", "");
  // @ViewChild(RegistrationComponent) registration: User;
  // this.newUser = this.registration.
  
  // addData(newUser: User){
  //   newUser = this.newUser;
  // }
  // @Input() data = new User("","");
}
