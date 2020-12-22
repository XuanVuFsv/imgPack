import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (!window.localStorage.getItem('accessToken'))
    {
      console.log('Not Account');
      this.router.navigate(['/login']);
    }
    // else {
    //   document.getElementById('layout-profile').style.display = "initial";
    // }
  }

}
