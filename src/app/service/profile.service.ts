import { Injectable } from '@angular/core';
import { Profile } from '../dto/profile';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {}

  getProfiles(): Observable<Profile[]> {
    this.http.get<Profile[]>(
      `${environment.apiUrl}/${this.config.data.profileUrl}`
    );
    return of([]);
  }

  saveProfile(profile: Profile): Observable<Profile> {
    return of();
  }
}
