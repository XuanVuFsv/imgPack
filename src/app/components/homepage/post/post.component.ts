import { Component, OnInit, Input, OnDestroy } from '@angular/core';
// import { Client} from '../../../components/general/client/client';
import { GetImageService } from '../../../services/get-image.service';
import { Client } from 'app/models/homePage';
import { Router, ActivatedRoute } from '@angular/router';
import { IProFile } from '../../../models/proFile';
import { PersonalProfileService } from '../../../services/personal-profile.service';
import { ILibrary } from '../../../models/library';
import { LibraryService } from '../../../services/library.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() client: Client;
  personal: IProFile;
  idPersonal: any;
  datas: Client[] = [];
  datasLibrary: ILibrary[] = [];
  userData: any;
  idUsers: any;
  save = false;
  compares: boolean;
  idImages: any;
  idLibrary: any;
  saveV: any;
  unsaveV: string;
  constructor(
    private router: Router,
    private proFileService: PersonalProfileService,
    private getImageService: GetImageService,
    private libraryService: LibraryService
  ) {}

  ngOnInit(): void {
    this.getMe();
    this.getUsers();
    // console.log(this.save);
    // this.saveV = true;
    this.unsaveV = 'unsave';
    this.getLibrary();
  }
  getLibrary() {
    this.libraryService.getLibrary().subscribe((data) => {
      this.datasLibrary = data['data'];
      this.idLibrary = this.datasLibrary.map((x) => x._id);
      // console.log('datasLibrary', this.idLibrary);
      if (this.idLibrary.includes(this.client._id)) { this.saveV = 'unsave'; }
      else { this.saveV = "save"; }
      // console.log('aloha', this.idLibrary.includes(this.client._id));
    });
  }
  onSelect(client) {
    this.router.navigate(['/users/usersImage/'], {
      queryParams: { id: client.author._id },
    });
  }
  getMe() {
    this.idPersonal = this.proFileService.getMe().subscribe((data) => {
      this.personal = data['data'];
      this.idPersonal = this.personal.users._id;
      // console.log('me',this.idPersonal);
    });
  }
  changeSave(client, stt) {
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
  onUnSave(client) {
    this.getImageService.unSaveImage(client).subscribe();
    this.unsaveV = 'save';
    console.log(this.idLibrary);
  }
  getUsers() {
    this.userData = this.getImageService.getImage().subscribe((data) => {
      this.datas = data['data'];
      // console.log('data cua tui1', this.datas.map(x => x['author']._id));
      this.idUsers = this.datas.map((x) => x.author._id);
      this.idImages = this.datas.map((x) => x._id);
      // console.log('idImages',this.idImages);
    });
  }
  ngOnDestroy(): void {}
}
