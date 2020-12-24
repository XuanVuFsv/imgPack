import { Injectable } from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  httpHeaders = new HttpHeaders({
    'content-type': 'application/json',
    Authorization: localStorage.getItem('accessToken')
  });


  url="https://imgpack.herokuapp.com/api/v1/follow/more"

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url,{
      headers: this.httpHeaders
    })
  }

  getProfile(){
    return this.http.get("https://imgpack.herokuapp.com/api/v1/profile/me",{
      headers: this.httpHeaders
    })
  }

  postFollow(id:string){
    var urlFollow = "https://imgpack.herokuapp.com/api/v1/follow/"+id;
    console.log(urlFollow);
    return this.http.post(urlFollow,{},{
      headers: this.httpHeaders
    })
  }

  PutUnfollow(id:string){
    var urlFollow = "https://imgpack.herokuapp.com/api/v1/follow/"+id;
    console.log(urlFollow);
    return this.http.put(urlFollow,{},{
      headers: this.httpHeaders
    })
  }

}
