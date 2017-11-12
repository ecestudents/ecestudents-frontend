import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})
                
export class HeaderComponent {
  menu = [  {label:"Home",path:""},
            {label:"Innovation Challenge",path:"ic"} ];
}
