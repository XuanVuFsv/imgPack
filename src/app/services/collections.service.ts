import { IProfileData } from '../models/profileData';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  private collectionsURL = 'https://imgpack.herokuapp.com/api/v1/newfeeds/collections';

  httpHeaders = new HttpHeaders({
    'content-type': 'application/json',
    Authorization: localStorage.getItem('accessToken')
  });

  currentCollectionIndex: number;

  UpdateCollectionIndex(index: number): void {
    this.currentCollectionIndex = index;
  }

  GetCollectionIndex(): number {
    return this.currentCollectionIndex;
  }

  constructor(private http: HttpClient) { }

  GetCollectionsData(): Observable<any> {
    return this.http.get<any>(this.collectionsURL, { headers: this.httpHeaders });
  }

  DeleteCollection(id: string): Observable<any> {
    return this.http.delete<any>(`${this.collectionsURL}/${id}`, { headers: this.httpHeaders });
  }

  AddCollectionsData(collection: any): Observable<any> {
    return this.http.post<any>(this.collectionsURL, collection, { headers: this.httpHeaders });
  }

  GetImageByCollection(id: string): Observable<any> {
    return this.http.get<any>(`${this.collectionsURL}/${id}`, { headers: this.httpHeaders });
  }

  Test(): Observable<any> {
    return this.http.get<any>('https://imgpack.herokuapp.com/api/v1/followings', { headers: this.httpHeaders });
  }
  // UpdateCollectionsDataByID(collectionsData: any, ID: any): Observable<any> {
  //   const httpOptions = {
  //     headers: this.httpHeaders,
  //     params: new HttpParams({
  //       fromObject: {
  //         id: ID
  //       }
  //     })
  //   };

  //   return this.http.post<any>(this.collectionsURL, collectionsData, httpOptions);
  // }

  // GetProfileData(): Observable<IProfileData> {
  //   return this.http.get<IProfileData>(this.testURL, {
  //     headers: this.httpHeaders
  //   });
  // }

  // UpdateProfileData(profileData: IProfileData): Observable<IProfileData> {
  //   return this.http.post<IProfileData>(this.testURL, profileData, this.httpOptions);
  // }
}
