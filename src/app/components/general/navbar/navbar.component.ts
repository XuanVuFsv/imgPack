import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  currentURL: string;
  viewportScroller: ViewportScroller;
  isCollapse: boolean;

  constructor(router: Router, viewportScroller: ViewportScroller) {
    this.currentURL = router.url;
    this.viewportScroller = viewportScroller;
  }

  ngOnInit(): void
  {
    this.isCollapse = true;
  }

  ngAfterViewInit() {

  }

  GotoElement(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }

}
