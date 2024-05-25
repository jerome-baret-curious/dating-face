import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { TranslateModule } from '@ngx-translate/core';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'profile-editor',
  standalone: true,
  templateUrl: './profile-editor.component.html',
  imports: [
    MatFormField,
    MatDatepickerToggle,
    MatDatepicker,
    MatSlider,
    TranslateModule,
    ReactiveFormsModule,
    MatDatepickerInput,
    MatInput,
    MatSliderThumb,
    MatLabel,
  ],
})
export class ProfileEditorComponent {
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
    this.profileForm.value;
  }
}
