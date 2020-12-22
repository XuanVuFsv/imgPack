import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentURL: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (!window.localStorage.getItem('accessToken'))
    {
      console.log('Not Account');
      this.router.navigate(['/login']);
    }
  }

}
