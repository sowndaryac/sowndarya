import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from  './username.validators';

@Component({
  selector: 'Signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  form = new FormGroup
  ({
    username: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    UsernameValidators.cannotContainSpace]
,    UsernameValidators.shouldBeUnique,
    ),
    password: new FormControl('', Validators.required)
  });

  login()
  {
      this.form.setErrors({
        invalidLogin: true
      });
  }
  get username()
  {
    return this.form.get('username');
  }
}
