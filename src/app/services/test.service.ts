import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private base: BaseService
  ) { }

  getTest() {
    const res = this.base.callGetApi({
      path: 'test',
      token: 'fjf9uw9fu9wf',
      auth: false
    });
    return res.pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
