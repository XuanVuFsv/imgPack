import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private testURL: string = 'https://img-pack.herokuapp.com/api/v1/sign-in';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
  };

  constructor(private http: HttpClient) { }

  GetUserSettings(): Observable<any> {
    return this.http.get<any>(this.testURL);
  }

  RequestLogin(loginInfor: any): Observable<any> {
    return this.http.post<any>(this.testURL, loginInfor, this.httpOptions);
  }
}
