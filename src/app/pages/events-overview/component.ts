import { Component } from '@angular/core';
import { DataService } from '../../helpers/dataservice/dataservice'


@Component({
  selector: 'app-events-overview',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})
export class EventsOverviewComponent {
  constructor(private dataservice: DataService) { }
}
