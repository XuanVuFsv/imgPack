import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  currentURL: string;

  constructor(private router: Router) {
    if (!window.localStorage.getItem('accessToken')) {
      // console.log('Not Account');
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }
}
