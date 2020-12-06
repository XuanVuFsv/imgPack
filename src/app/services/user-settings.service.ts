import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  constructor() { }

  // getUserSettings(): Observable<any> {
  //   return of(localStorage.getItem('userSettings'));
  // }
}
