import { Component, OnInit } from '@angular/core';
import {Clients, Client} from '../../../components/general/client/client';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clients: Client[] = Clients;
  constructor() { }

  ngOnInit(): void {

  }
}
