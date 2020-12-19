import { Component, OnInit } from '@angular/core';
import { Client, Clients } from '../../../../components/general/client/client';
@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss']
})
export class UserImagesComponent implements OnInit {
  clients: Client[] = Clients;
  constructor() { }

  ngOnInit(): void {
  }
  openImage(): void {
    const modal = document.querySelector('#modal');
    const previews = document.querySelector('.gallery img');
    const original = document.querySelector('.full-img');
    const button = document.querySelector('#image');
    const status = document.querySelector('.caption');
    // const originalSrc = button.getAttribute('src');
    // console.log(originalSrc);
    modal.classList.add('open1');
    original.classList.add('open2');
    modal.addEventListener('click', (e: Event) => {
      if ((e.target as HTMLElement).classList.contains('open1')) {
        modal.classList.remove('open1');
        original.classList.remove('open2');
      }
    });
  }
}
