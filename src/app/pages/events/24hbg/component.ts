import { Component } from '@angular/core';
import { StateService } from '../../../helpers/stateservice/stateservice'

@Component({
  selector: 'app-24hbg',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})
export class HBGComponent {
  constructor(private stateservice: StateService) {
    stateservice.menu_color = false;
  }

  agenda1 = [
    { time: "14:00 - 15:15", event: "Ideation workshop" },
    { time: "15:15 - 18:00", event: "Business Model Canvas Workshop" },
    { time: "18:00 - 19:30", event: "Business development with Amazon Web Services" },
    { time: "19:00 - 20:30", event: "Workshop by Maas & Kleiberg" },
    { time: "20:30 - 21:15", event: "Venture Capital Acquisition Workshop by VenturesOne" },
    { time: "21:15 - 00:00", event: "Pitching Workshop by Eldridge Labinjo" },
    { time: "21:15 - 00:00", event: "Start-up Fair & Student Expert Workshops" }
  ];

  agenda2 = [
    { time: "7:30 - 8:00", event: "Student Expert Workshops" },
    { time: "8:00 - 8:30", event: "Midnight Yoga" },
    { time: "8:30 - 10:00", event: "Open bar & games" },
    { time: "10:00 - 11:30", event: "Breakfast" },
    { time: "10:00 - 11:30", event: "Knock-out Pitching Rounds" },
    { time: "11:30 - 13:00", event: "Final Pitch" },
    { time: "11:30 - 13:00", event: "Winner Ceremony & Networking" }
  ];
}
