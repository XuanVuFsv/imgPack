import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ITopic} from '../models/topic';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
};
const API = 'https://imgpack.herokuapp.com/api/v1/topic/';
const imagesAPI = 'https://imgpack.herokuapp.com/api/v1/newfeeds/images/users/';
@Injectable({
  providedIn: 'root'
})



export class GetImageTopicService {
httpHeaders = new HttpHeaders({
  Authorization: localStorage.getItem('accessToken')
});

  find(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }
  getUsers(id): Observable<ITopic[]>{
    return this.httpClient.get<ITopic[]>(API + id, { headers: this.httpHeaders }).pipe();
  }

  // tslint:disable-next-line: whitespace
//   findIdUsers(id: number): Observable<IProFile>{
//     return this.httpClient.get<IProFile>(`${API}/${id}`).pipe();
//   }
//   getImageUsers(id): Observable<IImageUsers[]>{
//     return this.httpClient.get<IImageUsers[]>( imagesAPI + id, { headers: this.httpHeaders }).pipe();
//   }

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
