import { Component, OnInit, Input } from '@angular/core';
import { Client} from '../../../components/general/client/client';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() clients: Client;
  constructor() { }

  ngOnInit(): void {
  }

}
