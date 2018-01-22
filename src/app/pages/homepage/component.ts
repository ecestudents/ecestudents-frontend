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
  partners = [
              'AEGON',
              'Booking.com-logo',
              'DOPPER',
              'EY',
              'ING_Group_N.V._Logo',
              'mediamarkt',
              'oxfam',
              'Port_of_Rotterdam_logo',
              'Rabobank_-_Copy',
              'redbull',
              'thuisbezorgd',
              'Unicef_Logo',
              'Unilever'
              ]

  ngOnInit() {
  }
}
