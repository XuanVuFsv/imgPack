import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  URL = 'https://imgpack.herokuapp.com/api/v1/newfeeds/images';

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
  Upload(data): Observable<any> {
    // Make http post request over api
    // with formData as req
    return this.http.post(this.URL, data);
  }

}
