import { TestBed } from '@angular/core/testing';
import { ProfileService } from '../service/profile.service';
import { ProfileViewerComponent } from './profile-viewer.component';

describe('ProfileViewerComponent', () => {
  let profileService: ProfileService;

  beforeEach(() => {
    const mockProfileService = {};
    TestBed.configureTestingModule({
      declarations: [ProfileViewerComponent],
      providers: [{ provide: ProfileService, useValue: mockProfileService }],
    });
    profileService = TestBed.inject(ProfileService);
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ProfileViewerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
