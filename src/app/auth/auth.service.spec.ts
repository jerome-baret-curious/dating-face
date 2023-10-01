import { inject, TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AuthService],
    })
  );

  it('should be injected', inject([AuthService], (authService: AuthService) => {
    expect(authService).toBeTruthy();
  }));
});
