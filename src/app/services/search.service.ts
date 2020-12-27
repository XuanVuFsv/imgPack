import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ISearch} from '../models/search';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
};
const API = 'https://imgpack.herokuapp.com/api/v1/search';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  find(id: any) {
    throw new Error('Method not implemented.');
  }

  httpHeaders = new HttpHeaders({
    Authorization: localStorage.getItem('accessToken')
  });

  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<ISearch[]>{
    return this.httpClient.get<ISearch[]>(API ,{ headers: this.httpHeaders }).pipe();
  }
  Test(): Observable<any> {
    // console.log(this.httpHeaders);
    return this.httpClient.get<any>('https://imgpack.herokuapp.com/api/v1/followings', { headers: this.httpHeaders });
  }
  // tslint:disable-next-line: whitespace
  findIdUsers(id: number): Observable<ISearch>{
    return this.httpClient.get<ISearch>(`${API}/${id}`).pipe();
  }

  // searchUsers(id: string): Observable<Client[]> {
  //   if (!name.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(x => x.length ?
  //        this.log(`found heroes matching "${term}"`) :
  //        this.log(`no heroes matching "${term}"`)),
  //     catchError(this.handleError<Hero[]>('searchHeroes', []))
  //   );
  // }

}
