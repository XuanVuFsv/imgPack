import { Component, OnInit, OnDestroy } from '@angular/core';
// import {Clients, Client} from '../../../components/general/client/client';
import { GetImageService } from '../../../services/get-image.service';
import { Subscription } from 'rxjs/subscription';
import { Client } from 'app/models/homePage';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // clients: Client[] = Clients;
  subscription: Subscription;
  clients: Client[] = [];
  constructor(private _getImageService: GetImageService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  // onSelect(client){
  //   this.router.navigate(['/users/usersImage/'], {queryParams: {id : client.author._id}});
  // }
  loadData() {
    this.subscription = this._getImageService.getImage().subscribe(data => {
      // console.log(data);
      this.clients = data['data'];
      // console.log('datas', this.clients);
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
