import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'pm-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      street: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      zip: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      mobilePhone: ['', [Validators.minLength(0), Validators.maxLength(15)]],
      phone: ['', [Validators.minLength(0), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')]]
    })
  }
}
