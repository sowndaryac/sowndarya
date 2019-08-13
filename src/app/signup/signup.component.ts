import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { FormGroup, FormControl, validators} from '@angular/forms';

@Component({
  selector: 'Signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  form = new FormGroup({
    username: new FormControl('', 
    [Validators.required,
    Validators.minLength(3)
    ]),
    password: new FormControl('', Validators.required)
  });

  get username()
  {
    return this.form.get('username');
  }
}
