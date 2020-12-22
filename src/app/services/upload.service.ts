import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

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

  GetAllImage(): Observable<any> {
    return this.http.get<any>('https://imgpack.herokuapp.com/api/v1/newfeeds/images', { headers: this.httpHeaders });
  }

  postFile(fileToUpload: File, description: string, collection: string, topiclist: any){

    const endpoint = 'https://imgpack.herokuapp.com/api/v1/newfeeds/images';
    const formData: FormData = new FormData();
    formData.append('Img', fileToUpload, fileToUpload.name);
    formData.append('description', description);
    formData.append('collection', collection);
    formData.append('topic', topiclist);

    return this.http .post(endpoint, formData, this.httpOptions);

  }

}
