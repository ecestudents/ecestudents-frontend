import { Component, OnInit } from '@angular/core';
import { ResponsiveToggle } from 'foundation-sites/js/foundation.responsiveToggle.js';

@Component({
  selector: 'app-main-menu',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
                
export class MainMenuComponent implements OnInit {
  bulbicon = 'parts/menu/bulb_icon.png'
  
  /*
  menu = [  {label:"Innovation Challenge",path:"ic"},
            {label:"Job Portal",path:"http://jobportal.ecestudents.com"},
            {label:"Events",path:"http://events.ecestudents.com"}];
            
            */
           
  ngOnInit(){
    new ResponsiveToggle(".togglewrap")
  }
}
 