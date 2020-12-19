import { Component, OnInit } from '@angular/core';
import { Client, Clients } from '../../../components/general/client-collection/client-collection';
@Component({
  selector: 'app-your-image',
  templateUrl: './your-image.component.html',
  styleUrls: ['./your-image.component.scss']
})
export class YourImageComponent implements OnInit {
  collection: Client[] = Clients;
  constructor() { }

  ngOnInit(): void {
  }

}
