import { Component, OnInit, OnDestroy } from '@angular/core';
// import {Clients, Client} from '../../../components/general/client/client';
import { GetImageService } from '../../../services/get-image.service';
import { Subscription } from 'rxjs/subscription';
import { Client } from 'app/models/homePage';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // clients: Client[] = Clients;
  subscription: Subscription;
  clients: Client[] = [];
  constructor(private _getImageService: GetImageService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.subscription = this._getImageService.getImage().subscribe(data => {
      console.log(data);
<<<<<<< HEAD
      this.clients = data['data'];
      console.log(this.clients);
=======
     // tslint:disable-next-line: align
     this.clients = data['data'];
     console.log(this.clients);
>>>>>>> 3f2516262bdc8d1b94d79b8c06bb5ec20aee738d
    }, error => {
      console.log(error);
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
