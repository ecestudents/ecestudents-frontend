import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
      <app-main-menu></app-main-menu>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {

  }
     ngOnInit() {
         this.router.events.subscribe((event: NavigationEnd) => {
            if(event instanceof NavigationEnd) {
            window.scrollTo(0, 0);
        }
        })

    }
}
