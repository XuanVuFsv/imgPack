import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ITopic } from '../../../models/topic';
import {GetImageTopicService} from '../.././../services/getImageTopic.service';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  public topicId;
  datas: ITopic;
  userData: any;
  constructor(private route: ActivatedRoute, private imageTopicService: GetImageTopicService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.topicId = id;
      console.log('id',  this.topicId);

      this.userData = this.imageTopicService.getUsers(this.topicId).subscribe(data => {
        this.datas = data['data'];
        console.log('data', this.datas);
      });
    });
  }

  onSelect(client){
    this.router.navigate(['/users/usersImage/'], {queryParams: {id : client.author['_id']}})
   }
}


