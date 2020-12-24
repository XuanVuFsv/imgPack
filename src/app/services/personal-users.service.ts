import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IPersonalUsers} from '../models/personalUsers';
import {Client} from '../models/homePage';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
};
const API = 'https://imgpack.herokuapp.com/api/v1/';
@Injectable({
  providedIn: 'root'
})
export class PersonalUsersService {
  find(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }
  getBookmarkCreator(): Observable<IPersonalUsers[]>{
    return this.httpClient.get<IPersonalUsers[]>(API).pipe();
  }

  // tslint:disable-next-line: whitespace
  findIdUsers(id: number): Observable<IPersonalUsers>{
    return this.httpClient.get<IPersonalUsers>(`${API}/${id}`).pipe();
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
