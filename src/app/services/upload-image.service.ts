import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  URL = 'https://imgpack.herokuapp.com/api/v1/newfeeds/images';
  s3 = 'https://imgpack.herokuapp.com/api/v1/s3aws';

  httpHeaders = new HttpHeaders({
    Authorization: localStorage.getItem('accessToken')
  });

  constructor(private http: HttpClient) { }

  UploadS3(data: any): Observable<any> {

    // const formData: FormData = new FormData();
    // formData.append('source', data['source'], data['source'].name);
    // console.log('form', formData);
    // data['source'] = formData;
    // console.log('source Amazon', data);
    return this.http.post(this.s3, data, { headers: this.httpHeaders });
  }


  UpdateImageUpload(data: any): Observable<any> {

    // const formData: FormData = new FormData();
    // formData.append('source', data['source'], data['source'].name);
    // console.log('form', formData);
    // data['source'] = formData;
    // console.log('data upload', data);
    return this.http.post(this.URL, data, { headers: this.httpHeaders });
  }
  LoadImage(): Observable<any> {
    // Make http post request over api
    // with formData as req
    return this.http.get(this.URL, { headers: this.httpHeaders });
  }


}
