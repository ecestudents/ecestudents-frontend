import { Component } from '@angular/core';

@Component({
  selector: 'app-ic',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class ICComponent {
    ic_logo = 'pages/ic/ic_logo.png'
    
    endorsements = [
        {number: 4, message:"Innovation Challenge helped me lose 20kg. I higly recommend it", person:"Tom, the sportief"},
        {number: 5, message:"Innovation Challenge helped me lose 20kg. I higly recommend it", person:"Tom, the sportief"},
        {number: 4, message:"Innovation Challenge helped me lose 20kg. I higly recommend it", person:"Tom, the sportief"},
        {number: 3, message:"Innovation Challenge helped me lose 20kg. I higly recommend it", person:"Tom, the sportief"}
      ];
  
    agenda = [
            { time:"9:00 am - 9:05 am", event:"Opening Remarks"},
            { time:"9:00 am - 9:05 am", event:"Testing"},
            { time:"9:00 am - 9:05 am", event:"Opening Remarks"},
            { time:"9:00 am - 9:05 am", event:"Testing"},
            { time:"9:00 am - 9:05 am", event:"Opening Remarks"},
            { time:"9:00 am - 9:05 am", event:"Testing"},
            { time:"9:00 am - 9:05 am", event:"Opening Remarks"},
            { time:"9:00 am - 9:05 am", event:"Testing"},
            { time:"9:00 am - 9:05 am", event:"Opening Remarks"},
            { time:"9:00 am - 9:05 am", event:"Testing"},
            ];
}
