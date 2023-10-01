import { Injectable } from '@angular/core';
import { Profile } from '../dto/profile';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProfileService {
  getProfiles(profileId: number): Observable<Profile[]> {
    return of([]);
  }
}
