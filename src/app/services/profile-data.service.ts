import { IProfileData } from './../models/profileData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  private testURL: string = 'http://localhost:3000/profile';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
  };

  constructor(private http: HttpClient) { }

  GetProfileData(): Observable<IProfileData> {
    return this.http.get<IProfileData>(this.testURL);
  }

  UpdateProfileData(profileData: IProfileData): Observable<IProfileData> {
    return this.http.post<IProfileData>(this.testURL, profileData, this.httpOptions);
  }
}
