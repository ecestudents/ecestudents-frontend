import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
                
export class MainMenuComponent {
  menu = [  {label:"Home",path:""},
            {label:"Innovation Challenge",path:"ic"} ];
}
