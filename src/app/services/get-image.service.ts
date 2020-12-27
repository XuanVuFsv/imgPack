import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/observable';
import {Client} from '../models/homePage';
@Injectable({
  providedIn: 'root'
})
export class GetImageService {

  public API: string = 'https://imgpack.herokuapp.com/api/v1/';
  httpHeaders = new HttpHeaders({
    Authorization: localStorage.getItem('accessToken')
  });

  constructor(public http: HttpClient) { }

  getImage(): Observable<Client[]>{
    return this.http.get<Client[]>(this.API, { headers: this.httpHeaders});
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
