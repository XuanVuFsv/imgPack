import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs/observable';
import {Client} from '../models/homePage';
@Injectable({
  providedIn: 'root'
})
export class GetImageService {

  public API : string = 'https://img-pack.herokuapp.com/api/v1/';

  constructor(public http: HttpClient) { }

  getImage() : Observable<Client[]>{
    return this.http.get<Client[]>(this.API);
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
