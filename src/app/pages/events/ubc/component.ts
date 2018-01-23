import { Component } from '@angular/core';

@Component({
  selector: 'app-ubc',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class UBCComponent {
  white = 'pages/unilever/D3_Logo_transparent_darkbg';
  logo = 'pages/unilever/logo_dark'
  about = "pages/unilever/UnileverxECES"
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
