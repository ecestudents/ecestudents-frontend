import { Component, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-board-recruitment',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})


export class BoardRecruitmentComponent {
  positions = [
    { name: "President", icon: "Lion", text: "" },
    { name: "Vice President", icon: "Rhino", text: "" },
    { name: "Programme Manager", icon: "Elephant", text: "" },
    { name: "External Relations", icon: "Gorilla", text: "" },
    { name: "Marketing & Tech", icon: "Giraffe", text: "" }
  ]
}
