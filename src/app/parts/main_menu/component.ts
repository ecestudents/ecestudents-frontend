import { Component, OnInit } from '@angular/core';
import { ResponsiveToggle } from 'foundation-sites/js/foundation.responsiveToggle.js';

@Component({
  selector: 'app-main-menu',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})

export class MainMenuComponent implements OnInit {
  bulbicon = 'parts/menu/bulb_icon.png'


  menu = [
            { label:"Home",                   path:""}
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


  ngOnInit(){
    new ResponsiveToggle(".togglewrap")
  }
}
