import { Component } from '@angular/core';
import { DataService } from '../../helpers/dataservice/dataservice'
import { StateService } from '../../helpers/stateservice/stateservice'


@Component({
  selector: 'app-events-overview',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})
export class EventsOverviewComponent {
  constructor(
    private dataservice: DataService,
    private stateservice: StateService) {
    stateservice.menu_color = false;
  }
}
