import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';


interface Payload {
  path: string;
  token: string;
  auth: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class BaseService {

  constructor(
    private http: HttpClient
  ) { }

  callGetApi(payload: Payload) {
    const apiURL = `${environment.api}/${payload.path}`;
    let headers;
    if (payload.auth !== true) {
      return this.http.get(apiURL);
    }
    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${payload.token}`
    });
    return this.http.get(apiURL, { headers });
  }

  callPostApi(payload: Payload, data: any) {
    const apiURL = `${environment.api}/${payload.path}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${payload.token}`
    });
    return this.http.post(apiURL, data, { headers });
  }

  callPutApi(payload: Payload, data: any) {
    const apiURL = `${environment.api}/${payload.path}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${payload.token}`
    });
    return this.http.put(apiURL, data, { headers });
  }

  callDeleteApi(payload: Payload) {
    const apiURL = `${environment.api}/${payload.path}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${payload.token}`
    });
    return this.http.delete(apiURL, { headers });
  }
}
