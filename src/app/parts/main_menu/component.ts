import { Component, OnInit } from '@angular/core';
declare var $:any

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
    $(document).foundation();
  }
}
