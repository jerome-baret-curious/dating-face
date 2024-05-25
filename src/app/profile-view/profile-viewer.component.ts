import { Component, input, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { Profile } from '../dto/profile';
import { ProfileViewComponent } from './profile-view.component';

@Component({
  selector: 'profile-viewer',
  standalone: true,
  imports: [ProfileViewComponent],
  templateUrl: './profile-viewer.component.html',
})
export class ProfileViewerComponent implements OnInit {
  profiles: Profile[] = [];
  currProfile = -1;
  item = input('');

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe({
      next: v => (this.profiles = v),
      error: e => console.error(e),
    });
  }
}
