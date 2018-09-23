import { Component, OnInit, NgZone } from '@angular/core';
import { DropdownMenu } from 'foundation-sites/js/foundation.dropdownMenu';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../../helpers/dataservice/dataservice'
import { StateService } from '../../helpers/stateservice/stateservice'

@Component({
  selector: 'app-main-menu',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})


export class MainMenuComponent implements OnInit {
  eventitems = [];

  constructor(ngZone: NgZone, private router: Router, private dataservice: DataService, public stateservice: StateService) {
    this.dataservice.getEvent(false).subscribe(events => {
      Object.keys(events).forEach(key => this.eventitems.push({ label: events[key].menu_label, path: "events/" + key }))
      console.log(events)
    })
    this.breakpoint_switcher(window, ngZone)
  }

  menu = [
    { label: "Home", path: "" },
    {
      label: "Committees", path: "committees"//, children: this.eventitems
    },
    {
      label: "Events", path: "events/unilever_business_challenge", children: this.eventitems
    },
    { label: "Job Portal", path: "jobs" },
    { label: "Podcast", path: "podcast" }
    // { label: "Board 2018/2019", path: "board2018" }
  ];





  //toggle based on resize
  toggleMenu = true;
  breakpoint_switcher = (window, ngZone) => {
    const breakpoint = 640; //medium breakpoint

    let prev_size = breakpoint;
    window.onresize = e => ngZone.run(() => {
      if (window.innerWidth < breakpoint && prev_size >= breakpoint) this.toggleMenu = true
      prev_size = window.innerWidth
    })
  }

  ngOnInit() {
  }
}
