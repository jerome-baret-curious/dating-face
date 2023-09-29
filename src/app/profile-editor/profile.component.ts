import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DateTime } from 'luxon';

@Component({
  selector: 'profile-dating',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    birthDate: [DateTime.now()],
    lifestyle: this.fb.group({
      personality: [''],
      pets: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}

  updateProfile() {
    //TODO
    this.profileForm.patchValue({});
  }

  onSubmit() {
    // TODO
  }
}
