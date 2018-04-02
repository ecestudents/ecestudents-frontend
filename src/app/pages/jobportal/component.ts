import { Component, OnInit } from '@angular/core';
import { StateService } from '../../helpers/stateservice/stateservice'

@Component({
  selector: 'app-jobportal',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})
export class JobportalComponent implements OnInit {
  constructor(private stateservice: StateService) {
    stateservice.menu_color = true;
  }

  sphere = 'pages/jobportal/JobPortalSphere';
  portrait = 'pages/jobportal/succesgirl';
  asset1 = 'pages/jobportal/Asset_3';
  asset2 = 'pages/jobportal/Asset_5';
  asset3 = 'pages/jobportal/Asset_2';
  asset4 = 'pages/jobportal/Asset_4';



  ngOnInit() {
  }
}
