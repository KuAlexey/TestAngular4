import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-user-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class UserLoginComponent {


  listOfValidatedUser = [new User('admin', 'admin')];
  validatedUser = this.listOfValidatedUser[0];
  submitted = false;
  invalidValue = false;
 newLogin = '';
 newPassword = '';
   forSubmitting() {
      if (this.newLogin !== this.validatedUser.login || this.newPassword !== this.validatedUser.password) {
        this.invalidValue = true;
      } else {
        this.submitted = true;
     
      }
    }
  }







  