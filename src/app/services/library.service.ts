import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ILibrary } from '../models/library';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};
const API = 'https://imgpack.herokuapp.com/api/v1/newfeeds/library/';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  httpHeaders = new HttpHeaders({
    Authorization: localStorage.getItem('accessToken'),
  });

  find(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) {}
  getLibrary(): Observable<ILibrary[]> {
    return this.httpClient
      .get<ILibrary[]>(API, { headers: this.httpHeaders });
  }
}
