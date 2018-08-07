import { Component } from '@angular/core';
import {USER} from '../../mock/user.mock';



@Component({
  selector: 'app-user-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  validatedUser = USER;
  submitted = false;
  invalidLogin = false;
  invalidPassword = false;
 newLogin = '';
 newPassword = '';
   onSubmit() {
      if (this.newLogin !== this.validatedUser.login){
        this.invalidLogin = true;
    
      }else if (this.newPassword !== this.validatedUser.password){
        this.invalidPassword = true;
   
      } else {
        this.submitted = true;
    
      }
    }
  }







  