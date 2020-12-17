import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserSettings } from 'app/models/userSettings';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class UserSettingsService {

  private testURL: string = 'http://localhost:3000/user-settings';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
  };

  httpHeaders = new HttpHeaders({
    'content-type': 'application/json',
    Authorization: localStorage.getItem('accessToken')
  });

  constructor(private http: HttpClient) { }

  GetUserSettings(): Observable<IUserSettings> {
    console.log (this.httpHeaders);
    
    return this.http.get<IUserSettings>(this.testURL, {
      headers: this.httpHeaders
    });
  }

  UpdateUserSettings(userSettings: IUserSettings): Observable<IUserSettings> {
    return this.http.post<IUserSettings>(this.testURL, userSettings, this.httpOptions);
  }
}
