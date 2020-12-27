import { Component, OnInit } from '@angular/core';
import { PersonalUsersService } from '../../services/personal-users.service';
import { IPersonalUsers } from '../../models/personalUsers';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-upload-users',
  templateUrl: './upload-users.component.html',
  styleUrls: ['./upload-users.component.scss']
})
export class UploadUsersComponent implements OnInit {
  // tslint:disable-next-line: new-parens
  user = new IPersonalUsers;
  constructor(private route: ActivatedRoute, private personalUsersService: PersonalUsersService, private router: Router) { }

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);
    if (!window.localStorage.getItem('accessToken')) {
      // console.log('Not Account');
      this.router.navigate(['/login']);
    }
    // else {
    //   console.log('suc');
    //   document.getElementById('layout-users-image').style.display = "initial";
    // }
  }
  getRoute(id: any) {
    this.personalUsersService.findIdUsers(id).subscribe((res: any) => {
      this.user = res;
    });
  }
}
