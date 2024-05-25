import { Component, input } from '@angular/core';
import { Profile } from '../dto/profile';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'profile-view',
  standalone: true,
  templateUrl: './profile-view.component.html',
  imports: [
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardImage,
    MatCardTitle,
    MatCardSubtitle,
  ],
})
export class ProfileViewComponent {
  profile = input<Profile>();
}
