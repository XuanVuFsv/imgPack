import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ITopic } from '../../../models/topic';
import { GetImageTopicService } from '../.././../services/getImageTopic.service';
import { ILibrary } from '../../../models/library';
import { LibraryService } from '../../../services/library.service';
import { IProFile } from '../../../models/proFile';
import { PersonalProfileService } from '../../../services/personal-profile.service';
import { GetImageService } from '../../../services/get-image.service';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  public topicId;
  datas: ITopic;
  userData: any;
  datasLibrary: ILibrary[] = [];
  personal: IProFile;
  idPersonal: any;
  idUsers: any;
  idLibrary: any;
  saveV: any;
  imgss: any;
  constructor(
    private route: ActivatedRoute,
    private imageTopicService: GetImageTopicService,
    private router: Router,
    private libraryService: LibraryService,
    private proFileService: PersonalProfileService,
    private getImageService: GetImageService
  ) {}

  ngOnInit(): void {
    // this.getLibrary();
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.topicId = id;
      this.userData = this.imageTopicService
        .getUsers(this.topicId)
        .subscribe((data) => {
          this.datas = data['data'];
          // console.log('data', this.datas);
          // this.getIdUsers(usr)
        });
    });
    this.getMe(); 
  }
  // getIdUsers(usr){
  //   this.idUsers =
  // }
  getMe() {
    this.idPersonal = this.proFileService.getMe().subscribe((data) => {
      this.personal = data['data'];
      this.idPersonal = this.personal.users._id;
    });
  }
  getLibrary() {
    this.libraryService.getLibrary().subscribe((data) => {
      this.datasLibrary = data['data'];
      this.idLibrary = this.datasLibrary.map((x) => x._id);
      // console.log('datasLibrary', this.idLibrary);
    });
  }
  Saving(i: any) {
    i.isSave = true;
    this.getImageService.saveImage(i._id).subscribe();
  }
  unSaving(i: any) {
    i.isSave = false;
    this.getImageService.unSaveImage(i._id).subscribe();
  }
  changeSave(client, stt, i) {
    // console.log();
    if (stt === 'save') {
      this.saveV = 'unsave';
      this.getImageService.saveImage(client).subscribe();
      // this.save = !this.save;
      // console.log('save',this.save);
    } else {
      this.saveV = 'save';
      this.getImageService.unSaveImage(client).subscribe();
    }
  }
  onSelect(client) {
    this.router.navigate(['/users/usersImage/'], {
      queryParams: { id: client.author['_id'] },
    });
  }
}
