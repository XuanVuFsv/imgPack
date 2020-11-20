import { Component, OnInit } from '@angular/core';
import { TestService } from '@services/test.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor( /*private test: TestService*/) { }

  ngOnInit(): void {
    // this.test.getTest().subscribe((data) => {
    //   console.log(data);
    // });
  }

}
