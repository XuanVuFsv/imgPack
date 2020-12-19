import { Component, OnInit, Input, OnDestroy } from '@angular/core';
// import { Client} from '../../../components/general/client/client';
import {GetImageService} from '../../../services/get-image.service';
import {Subscription} from 'rxjs/subscription';
import { Client } from 'app/models/homePage';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy{
  @Input() client: Client;
  constructor() {}

  ngOnInit(): void {
  }
 ngOnDestroy(): void {

 }

}
