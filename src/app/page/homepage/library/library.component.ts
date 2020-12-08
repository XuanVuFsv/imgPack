import { Component, OnInit } from '@angular/core';
import { Client, Clients} from '../../../components/general/client-library/client-library';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  clients: Client[] = Clients;
  constructor() { }

  ngOnInit(): void {
  }

}
