import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  open(){
    const selectElement = (element) => {
      return document.querySelector(element);
    };
    const body = selectElement('body');
    body.classList.toggle('open');
    console.log('hi');
  }
}
