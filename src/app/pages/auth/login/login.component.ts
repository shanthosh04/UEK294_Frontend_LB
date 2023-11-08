import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {RegisterDto, UserControllerService} from "../../../openapi-client";

@Component({
  selector: 'pm-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formGroup!: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UserControllerService) {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    }

  submit() {
    console.log(this.formGroup);
    console.log(this.formGroup.errors);
    if(this.formGroup.valid) {
      this.userService.login(this.formGroup.value as RegisterDto).subscribe(val=> {
        alert('erfolgreich eingeloggt');
      })
    }
  }
}
