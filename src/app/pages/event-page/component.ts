import { Component } from '@angular/core'
import { Subscription } from 'rxjs'
import { DataService } from '../../helpers/dataservice/dataservice'
import { Router, ActivatedRoute } from '@angular/router'
import { StateService } from '../../helpers/stateservice/stateservice'

@Component({
  selector: 'app-event-page',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})
export class EventPageComponent {

  public event;
  constructor(
    private dataservice: DataService,
    private stateservice: StateService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    stateservice.menu_color = false;

    this.event = {}

    this.activatedRoute.params.subscribe(params => {
      this.dataservice.getEvent(params['id']).subscribe(event => {
        if (event == false) this.router.navigate(["/"])
        else this.event = event.page
        console.log(this.event)
      })
    })
  }
}
