import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
                
export class MainMenuComponent {
  bulbicon = 'parts/menu/bulb_icon.png'
  
  menu = [  {label:"Innovation Challenge",path:"ic"},
            {label:"Job Portal",path:"#"},
            {label:"Events",path:"#"}];
}
