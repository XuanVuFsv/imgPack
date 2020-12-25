import { Component, OnInit, Input, OnDestroy } from '@angular/core';
// import { Client} from '../../../components/general/client/client';
import {GetImageService} from '../../../services/get-image.service';
import { Client } from 'app/models/homePage';
import { Router, ActivatedRoute } from '@angular/router';
import { IProFile } from '../../../models/proFile';
import { PersonalProfileService } from '../../../services/personal-profile.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy{
  @Input() client: Client;
  personal: IProFile;
  idPersonal: any;
  datas: Client[] = [];
  userData: any;
  idUsers: any;
  save: boolean=false ;
  constructor(private router: Router,    private proFileService: PersonalProfileService,    private getImageService: GetImageService) {}

  ngOnInit(): void {
    this.getMe();
    this.getUsers();
    console.log(this.save);
  }
  onSelect(client){
    this.router.navigate(['/users/usersImage/'], {queryParams: {id : client.author._id}});
  }
  getMe(){
    this.idPersonal = this.proFileService.getMe().subscribe((data) => {
      this.personal = data['data'];
      this.idPersonal = this.personal.users._id;
      // console.log('me',this.idPersonal);
    })
  }
  onSave(client){
    this.getImageService.saveImage(client).subscribe();
    this.save = !this.save;
    console.log('save',this.save);
    
  }
  onUnSave(client){
    this.getImageService.unSaveImage(client).subscribe();
    this.save = !this.save;
    console.log('unsave',this.save);


  }
  getUsers(){
    this.userData = this.getImageService
    .getImage()
    .subscribe((data) => {
      this.datas = data['data'];
      // console.log('data cua tui1', this.datas.map(x => x['author']._id));
      this.idUsers = this.datas.map(x => x['author']._id);
    });
  }
 ngOnDestroy(): void {

 }

}
