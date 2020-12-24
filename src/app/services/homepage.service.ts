import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  private testURL: string = 'https://imgpack.herokuapp.com/api/v1/sign-in';

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

  GetUserSettings(): Observable<any> {
    return this.http.get<any>(this.testURL, {
      headers: this.httpHeaders
    });
  }

  RequestLogin(loginInfor: any): Observable<any> {
    return this.http.post<any>(this.testURL, loginInfor, this.httpOptions);
  }
}
