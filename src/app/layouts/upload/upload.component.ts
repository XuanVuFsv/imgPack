import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (!window.localStorage.getItem('accessToken'))
    {
      console.log('Not Account');
      this.router.navigate(['/login']);
    }
    // else {
    //   document.getElementById('layout-upload').style.display = "initial";
    // }
  }
}
