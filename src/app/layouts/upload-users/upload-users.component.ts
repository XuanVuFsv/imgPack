import { Component, OnInit } from '@angular/core';
import {PersonalUsersService} from '../../services/personal-users.service';
import {IPersonalUsers} from '../../models/personalUsers';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-upload-users',
  templateUrl: './upload-users.component.html',
  styleUrls: ['./upload-users.component.scss']
})
export class UploadUsersComponent implements OnInit {
  // tslint:disable-next-line: new-parens
  user = new IPersonalUsers;
  constructor(private route: ActivatedRoute, private personalUsersService: PersonalUsersService) { }

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);
  }
  getRoute(id: any){
    this.personalUsersService.findIdUsers(id).subscribe((res: any ) => {
      this.user = res;
    });

    
}
}
