import { Component } from '@angular/core';

@Component({
  selector: 'app-ubc',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class UBCComponent {
  white = 'pages/unilever/top_logo'
  logo = 'pages/unilever/desc_logo'
  about = "pages/unilever/UnileverxECE3"
    agenda = [
            { time:"09:00", event: [
                {text: "Reporting"},
                {text:"Inspiring Presentations"},
                {text:"Group Formation & Case Introduction"}]},
            { time:"13:00", event:[
                {text:"Lunch"},
                {text:"Case Solving & Pitching"},
                {text:"Results Announcement"}]},
            { time:"17:30", event:[{text:"Networking Drinks at Weena Bar"}]}
            ]

    partners = ["amora", "calve", "hellmans", "knorr", "maille"]

}
