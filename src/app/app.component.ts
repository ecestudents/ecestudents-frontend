import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
 
 