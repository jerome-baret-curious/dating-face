import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile-service';
import { Profile } from '../dto/profile';

@Component({
  selector: 'profile-viewer',
  templateUrl: './profile-viewer.component.html',
})
export class ProfileViewerComponent implements OnInit {
  profiles: Profile[] = [];
  currProfile = -1;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfiles(1).subscribe({
      next: v => (this.profiles = v),
      error: e => console.error(e),
    });
  }
}
