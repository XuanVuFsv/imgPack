import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IBookMarkCreator} from '../models/bookMarkCreator';
import {ITrendingCreator} from '../models/trendingCreator';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
};
const API = 'https://imgpack.herokuapp.com/api/v1/followings';
@Injectable({
  providedIn: 'root'
})
export class BookmarkCreatorService {
  find(id: any) {
    throw new Error('Method not implemented.');
  }

  httpHeaders = new HttpHeaders({
    Authorization: localStorage.getItem('accessToken')
  });

  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<IBookMarkCreator[]>{
    return this.httpClient.get<IBookMarkCreator[]>(API , { headers: this.httpHeaders }).pipe();
  }
  getTrendingCreator(): Observable<ITrendingCreator[]>{
    return this.httpClient.get<ITrendingCreator[]>('https://imgpack.herokuapp.com/api/v1/trending' , { headers: this.httpHeaders }).pipe();
  }
  Test(): Observable<any> {
    console.log(this.httpHeaders);
    return this.httpClient.get<any>('https://imgpack.herokuapp.com/api/v1/followings', { headers: this.httpHeaders });
  }
  // tslint:disable-next-line: whitespace
  findIdUsers(id: number): Observable<IBookMarkCreator>{
    return this.httpClient.get<IBookMarkCreator>(`${API}/${id}`).pipe();
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
