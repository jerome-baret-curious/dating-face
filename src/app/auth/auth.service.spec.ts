import { inject, TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ConfigService } from '../config/config.service';
import { importProvidersFrom } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.config';

describe('AuthService', () => {
  beforeEach(() => {
    const mockConfigService = {};
    TestBed.configureTestingModule({
      providers: [
        importProvidersFrom(
          JwtModule.forRoot({
            config: {
              tokenGetter: tokenGetter,
              allowedDomains: ['example.com'],
              disallowedRoutes: ['http://example.com/examplebadroute/'],
            },
          }),
        ),
        AuthService,
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ConfigService, useValue: mockConfigService },
      ],
    });
  });

  it('should be injected', inject([AuthService], (authService: AuthService) => {
    expect(authService).toBeTruthy();
  }));
});
