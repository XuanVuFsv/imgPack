import { Component, OnInit } from '@angular/core';
import { Client, Clients} from '../../../components/general/client-library/client-library';
import {ILibrary} from '../../../models/library';
import {LibraryService} from '../../../services/library.service';
import {GetImageService} from '../../../services/get-image.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  datas: ILibrary[]=[];
  index: any; 
  constructor(private libraryService: LibraryService,  private getImageService: GetImageService,private router: Router) { }

  ngOnInit(): void {
    this.getLibrary();
  }
  getLibrary(){
      this.libraryService.getLibrary().subscribe((data) => {
      this.datas = data['data'];
      // console.log('datas',this.datas);
    })
  }
  onUnSave(client,index){
    this.getImageService.unSaveImage(client).subscribe();
    this.datas.splice(index,1);
  }
  onSelectName(client){
      this.router.navigate(['/users/usersImage/'], {queryParams: {id : client.author._id}});
  }
}
