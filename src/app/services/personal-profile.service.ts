import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProFile } from '../models/proFile';
import { IImageUsers } from '../models/imageUsers';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
};
const API = 'https://imgpack.herokuapp.com/api/v1/profile/';
const imagesAPI = 'https://imgpack.herokuapp.com/api/v1/newfeeds/images/users/';
const APIme = 'https://imgpack.herokuapp.com/api/v1/profile/me';
const yourImageURL = 'https://imgpack.herokuapp.com/api/v1/newfeeds/images';
@Injectable({
  providedIn: 'root'
})

export class PersonalProfileService {
  httpHeaders = new HttpHeaders({
    Authorization: localStorage.getItem('accessToken')
  });

  find(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }
  getUsers(id): Observable<IProFile[]> {
    return this.httpClient.get<IProFile[]>(API + id, { headers: this.httpHeaders }).pipe();
  }
  getMe(): Observable<IProFile[]> {
    return this.httpClient.get<IProFile[]>(APIme, { headers: this.httpHeaders }).pipe();
  }

  // tslint:disable-next-line: whitespace
  findIdUsers(id: number): Observable<IProFile> {
    return this.httpClient.get<IProFile>(`${API}/${id}`).pipe();
  }
  getImageUsers(id): Observable<IImageUsers[]> {
    return this.httpClient.get<IImageUsers[]>(imagesAPI + id, { headers: this.httpHeaders }).pipe();
  }

  LoadImage(): Observable<any> {
    // Make http post request over api
    // with formData as req
    return this.httpClient.get(yourImageURL, { headers: this.httpHeaders });
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