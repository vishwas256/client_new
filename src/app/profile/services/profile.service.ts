import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = 'api/profile';
  constructor(private httpClient: HttpClient) {}
  getProfile(): Observable<any> {
    return this.httpClient.get(this.api);
  }

  createProfile(profileData: Profile): Observable<any> {
    return this.httpClient.post(this.api, profileData);
  }
}
