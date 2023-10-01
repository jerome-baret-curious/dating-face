import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { of, shareReplay, tap } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}

  login(email: string, password: string) {
    return this.http.post<string>('/api/login', { email, password }).pipe(
      tap(token => this.setSession(token)),
      shareReplay()
    );
  }

  private setSession(token: string) {
    localStorage.setItem('access_token', token);
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  isLoggedIn() {
    const token = localStorage.getItem('access_token');
    return this.jwtHelper.isTokenExpired(token);
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  refreshAuthToken() {
    //TODO
    return of('gg');
  }
}
