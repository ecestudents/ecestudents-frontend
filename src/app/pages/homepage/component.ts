import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-homepage',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class HomepageComponent implements OnInit {
  logo = 'pages/front/Logo_ECE_transparent.png'
  bulb = 'pages/front/Bulbicon.svg'
  ic_logo = 'pages/ic/ic_logo.png'
  partners = 'pages/front/sponsors.png'
  
  ngOnInit() {
  }
}
