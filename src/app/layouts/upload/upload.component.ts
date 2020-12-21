import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

data:any;
  constructor() {}


  ngOnInit(): void {
  }

  topiclist=  ["go","toopodaso"];
  addtopic(topic){
  this.topiclist.push(topic.value);
  topic.value="";
  }

}
