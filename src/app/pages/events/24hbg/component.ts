import { Component } from '@angular/core';

@Component({
  selector: 'app-24hbg',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class HBGComponent {
  
  agenda1 = [
            { time:"13:00 - 13:30", event:"Welcome & Introduction"},
            { time:"13:30 - 14:30", event:"Keynote speaker & Ideation Workshop"},
            { time:"14:00 - 15:15", event:"Finance & marketing"},
            { time:"15:15 - 18:00", event:"Market Research"},
            { time:"18:00 - 19:30", event:"Dinner"},
            { time:"19:00 - 20:30", event:"Pitching Workshop"},
            { time:"20:30 - 21:15", event:"Growthhacking Workshop"},
            { time:"21:15 - 00:00", event:"Free Working Time"}
            ];
  
  agenda2 = [
            { time:"7:30 - 8:00", event:"Morning Energizer"},
            { time:"8:00 - 8:30", event:"Breakfast"},
            { time:"8:30 - 10:00", event:"Pitch Generation"},
            { time:"10:00 - 11:30", event:"Knockout Rounds"},
            { time:"11:30 - 13:00", event:"Final Pitch"},
            ];
}
