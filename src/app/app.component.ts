import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {} 

     ngOnInit() {
         this.router.events.subscribe((evt) => {
             if (!(evt instanceof NavigationEnd)) {
                 return;
             }
             document.body.scrollTop = 0;
         });
     }
}
 
 