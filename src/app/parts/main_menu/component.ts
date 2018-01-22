import { Component, OnInit,  NgZone } from '@angular/core';
import { DropdownMenu } from 'foundation-sites/js/foundation.dropdownMenu';

@Component({
  selector: 'app-main-menu',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})

export class MainMenuComponent implements OnInit {
  constructor(ngZone:NgZone) {
    this.breakpoint_switcher(window, ngZone)
  }

  menu = [
            { label:"Home",                   path:""},
            { label:"Events",                 path:"events", children: [
                  { label:"Innovation Challenge",   path:"events/ic"},
                  { label:"IdeaLab",                path:"events/idealab"},
                  { label:"SEM",                    path:"events/sem"},
                  //{ label:"24 Hour Business Game",  path:"events/24hbg"},
                  //{ label:"D Cube Summit",          path:"events/dcube"}
                  ]},
            //{ label:"Calendar",               path:"calendar"},
            //{ label:"Committees",             path:"committees", children: [
                  //{ label:"Innovation Challenge",   path:"committees/ic"},
                  //{ label:"IdeaLab",                path:"committees/idealab"},
                  //{ label:"SEM",                    path:"committees/sem"},
                  //{ label:"24 Hour Business Game",  path:"committees/24hbg"},
                  //{ label:"D Cube Summit",          path:"committees/dcube"}]},
            { label:"Job Portal",             path:"jobs" }
            ];

  //toggle based on resize
  toggleMenu = true;
  breakpoint_switcher = (window, ngZone) => {
      const breakpoint = 640; //medium breakpoint

      let prev_size = breakpoint;
      window.onresize = e => ngZone.run(() => {
        if(window.innerWidth < breakpoint && prev_size >= breakpoint) this.toggleMenu = true
        prev_size = window.innerWidth
    })
  }

    ngOnInit() {
      //new DropdownMenu("#menu");
  }
}
