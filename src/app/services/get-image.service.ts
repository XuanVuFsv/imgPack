import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/observable';
import {Client} from '../models/homePage';
@Injectable({
  providedIn: 'root'
})
export class GetImageService {
httpHeaders = new HttpHeaders({
  Authorization: localStorage.getItem('accessToken')
});

  public API: string = 'https://imgpack.herokuapp.com/api/v1/';
  public baseURL: string = 'https://imgpack.herokuapp.com/api/v1/newfeeds/library';
  constructor(public http: HttpClient) { }

  getImage(): Observable<Client[]>{
    return this.http.get<Client[]>(this.API,{ headers: this.httpHeaders });
  }
  saveImage(id): Observable<Client[]>{
    return this.http.post<Client[]>(`${this.baseURL}/save/${id}`,{},{ headers: this.httpHeaders })
  }
  unSaveImage(id): Observable<Client[]>{
    return this.http.put<Client[]>(`${this.baseURL}/unsave/${id}`,{},{ headers: this.httpHeaders })
  }
  handleError(err){
    if (err.error instanceof Error){
      console.log(`Client-side error: ${err.error.message}`);
    }
    else{
      console.log(`Server-side error: ${err.status} - ${err.error}` );
    }
  }
}
