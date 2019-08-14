import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

form: FormGroup;
  constructor(fb: FormBuilder) 
  {
    this.form = fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get oldPassword() { return this.form.get('oldPassword'); } 
  get newPassword() { return this.form.get('newPassword'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }
}
