import { Component, input } from '@angular/core';
import { Profile } from '../dto/profile';

@Component({
  selector: 'profile-view',
  templateUrl: './profile-view.component.html',
})
export class ProfileViewComponent {
  profile = input<Profile>();
}
