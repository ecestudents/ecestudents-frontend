import { Component } from '@angular/core'
import { DataService } from '../../helpers/dataservice/dataservice'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-committee-page',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})
export class CommitteePageComponent {

  public data;
  constructor(
    private dataservice: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.data = this.dataservice.committees.filter(c => c['link'] == params['id'])[0]

      if (this.data == undefined) this.router.navigate(["/committees"])
      console.log(this.data)
    })
  }
}
