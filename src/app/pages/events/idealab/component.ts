import { Component } from '@angular/core';


@Component({
  selector: 'app-idealab',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class IdeaLabComponent {
  logo = 'pages/idealab/logo.svg';
  white = 'pages/idealab/IdeaLab_Logo_white.png'

    endorsements = [
        {number: 4, message:"Innovation Challenge helped me lose 20kg. I higly recommend it", person:"Tom, the sportief"},
        {number: 5, message:"Innovation Challenge helped me lose 20kg. I higly recommend it", person:"Tom, the sportief"},
        {number: 4, message:"Innovation Challenge helped me lose 20kg. I higly recommend it", person:"Tom, the sportief"},
        {number: 3, message:"Innovation Challenge helped me lose 20kg. I higly recommend it", person:"Tom, the sportief"}
      ];

    agenda = [
            { time:"13:30 - START", event: [
              {text: "Introduction to the event and to ECE Students"},
              {text: "Company presentations"}
              ]},
            { time:"14:15", event:[
              {text: "Selection of participant groups and assignment of cases; move to workshop rooms"},
              {text: "Icebreaker games in groups"}
              ]},
            { time:"14:45", event:[
              {text: "Case solving: Brainstorming"},
              {text: "Case solving: Finalizing solution and preparing pitch"}
              ]},
            { time:"16:15", event:[
              {text: "Groups pitch to startups"}
              ]},
            { time:"16:30", event:[
              {text: "Return to the main room for finalist pitch"},
              {text: "Selection of winning team by jury"},
              {text: "Award ceremony and wrap-up"}
              ]},
            { time:"17:00 - END", event:[

              ]}
            ];
}
