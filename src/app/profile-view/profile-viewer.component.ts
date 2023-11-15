import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { Profile } from '../dto/profile';

@Component({
  selector: 'profile-viewer',
  templateUrl: './profile-viewer.component.html',
})
export class ProfileViewerComponent implements OnInit {
  profiles: Profile[] = [];
  currProfile = -1;
  @Input() item = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe({
      next: v => (this.profiles = v),
      error: e => console.error(e),
    });
  }
}
