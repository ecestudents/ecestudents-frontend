import { Component, OnInit } from '@angular/core';
import { StateService } from '../../helpers/stateservice/stateservice'

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.pug',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  constructor(private stateservice: StateService) {
    stateservice.menu_color = true;
  }

  podcast = 'pages/podcast/podcast';

  ngOnInit() {
  }

}
