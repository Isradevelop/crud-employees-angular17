import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
//import { isValidField } from '../../helpers/validationForm';

@Component({
  selector: 'app-offcanvas-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './offcanvas-edit.component.html',
  styleUrl: './offcanvas-edit.component.css'
})
export class OffcanvasEditComponent {
  @Input() selectedUser: any;
  @Output() changeEditEvent = new EventEmitter<void>();

  myForm = this.fb.group({
    gender: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
    age: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    street: ['', [Validators.required]],
    number: [null, [Validators.required, Validators.min(1)]],
    username: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const selectedUserData = {
      gender: this.selectedUser.gender,
      age: this.selectedUser.dob.age,
      phone: this.selectedUser.phone,
      email: this.selectedUser.email,
      country: this.selectedUser.location.country,
      city: this.selectedUser.location.city,
      state: this.selectedUser.location.state,
      street: this.selectedUser.location.street.name,
      number: this.selectedUser.location.street.number,
      username: this.selectedUser.login.username
    }
    this.myForm.reset(selectedUserData)
  }

  isValidField(field: 'gender' | 'age' | 'phone' | 'email' | 'country' | 'city' | 'state' | 'street' | 'number' | 'username') {
    return !!!this.myForm.controls[field].errors
  }

  getErrorField(field: 'gender' | 'age' | 'phone' | 'email' | 'country' | 'city' | 'state' | 'street' | 'number' | 'username') {
    if (this.myForm.controls[field].getError('required')) return 'This field is required';
    if (this.myForm.controls[field].getError('email')) return 'Not valid email';
    if (this.myForm.controls[field].getError('min')) return `Minimum allowed value is ${this.myForm.controls[field].getError('min')['min']}`;
    if (this.myForm.controls[field].getError('max')) return `Minimum allowed value is ${this.myForm.controls[field].getError('max')['max']}`;
    return ''
  }

  save() {
    this.changeEditEvent.emit();
  }

  exit() {
    this.changeEditEvent.emit();
  }
}
