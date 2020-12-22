import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  postFile(fileToUpload: File, description: string, collection: string, topiclist: any){

    const endpoint="https://imgpack.herokuapp.com/api/v1/newfeeds/images";
    const formData: FormData = new FormData();
    formData.append('Img', fileToUpload, fileToUpload.name);
    formData.append('description',description);
    formData.append('collection',collection);
    formData.append('topic',topiclist);

    return this.http .post(endpoint, formData);

  }

}
