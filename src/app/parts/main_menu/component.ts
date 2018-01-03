import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})

export class MainMenuComponent {
  constructor(ngZone:NgZone) {
    this.breakpoint_switcher(window, ngZone)
  }

  menu = [
            { label:"Home",                   path:""},
            { label:"Events",                 path:"events", children: [
                  { label:"Innovation Challenge",   path:"ic"},
                  { label:"IdeaLab",                path:"idealab"},
                  { label:"SEM",                    path:"sem"},
                  { label:"24 Hour Business Game",  path:"24hbg"},
                  { label:"D Cube Summit",          path:"dcube"}]},
            { label:"Calendar",               path:"calendar"},
            { label:"Committees",             path:"committees", children: [
                  { label:"Innovation Challenge",   path:"ic"},
                  { label:"IdeaLab",                path:"idealab"},
                  { label:"SEM",                    path:"sem"},
                  { label:"24 Hour Business Game",  path:"24hbg"},
                  { label:"D Cube Summit",          path:"dcube"}]},
            { label:"Job Portal",             path:"jobs" }
            ];

  //toggle based on resize
  toggleMenu = true;
  breakpoint_switcher = (window, ngZone) => {
      const breakpoint = 640; //medium breakpoint
      if(window.innerWidth >= breakpoint) this.toggleMenu = false

      let prev_size = breakpoint;
      window.onresize = e => ngZone.run(() => {
        if(window.innerWidth >= breakpoint) this.toggleMenu = false
        if(window.innerWidth < breakpoint && prev_size >= breakpoint) this.toggleMenu = true
        prev_size = window.innerWidth
  })
  }
}
