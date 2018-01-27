import { Component } from '@angular/core';

@Component({
  selector: 'app-sem',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class SEMComponent {
  logo = 'pages/sem/SEM_logo.svg';
  white = 'pages/sem/SEMlogowhite.png'
  ws1 = 'pages/sem/ws1'
  ws2 = 'pages/sem/ws2'
  ws3 = 'pages/sem/ws3'
  ws4 = 'pages/sem/ws4'

  endorsements = [
    { number: 4, message: "Innovation Challenge helped me lose 20kg. I higly recommend it", person: "Tom, the sportief" },
    { number: 5, message: "Innovation Challenge helped me lose 20kg. I higly recommend it", person: "Tom, the sportief" },
    { number: 4, message: "Innovation Challenge helped me lose 20kg. I higly recommend it", person: "Tom, the sportief" },
    { number: 3, message: "Innovation Challenge helped me lose 20kg. I higly recommend it", person: "Tom, the sportief" }
  ];

  agenda = [
    { time: "9:00 am - 9:05 am", event: "Opening Remarks" },
    { time: "9:00 am - 9:05 am", event: "Testing" },
    { time: "9:00 am - 9:05 am", event: "Opening Remarks" },
    { time: "9:00 am - 9:05 am", event: "Testing" },
    { time: "9:00 am - 9:05 am", event: "Opening Remarks" },
    { time: "9:00 am - 9:05 am", event: "Testing" },
    { time: "9:00 am - 9:05 am", event: "Opening Remarks" },
    { time: "9:00 am - 9:05 am", event: "Testing" },
    { time: "9:00 am - 9:05 am", event: "Opening Remarks" },
    { time: "9:00 am - 9:05 am", event: "Testing" },
  ];

  faq = [
    { ask: "Do I (my team) need to attend all workshops?", answer: "As our competition involves a series of workshops that build up on each other to develop your entrepreneurial idea, attending all workshops is highly advised. Also, the winning team in the final workshop will be determined additionally based on the progress they have made throughout the weeks." },
    { ask: "I can’t attend a workshop, what should I do?", answer: "In case you cannot come to one of our workshops, please send an email to asparuh.georgiev@ecestudents.com. It is best if at least the majority of your team is present in each workshop." },
    { ask: "Can I sign up individually?", answer: "Yes, you can! If you don’t have a team, we will find you one based on your indicated interest in the SEM themes. We will group you with participants who have the same preferred theme to work on during the event. " },
    { ask: "How many people should be in a team?", answer: "All teams should have 4 members to work together. If you have friends/people in mind you would like to work with, please write their names in our application form. All members of your team should fill out the SEM application form. Furthermore, if you do not have enough members for a full team, we will group you with other participants based on best fit. " },
    { ask: "Is it only for master students?", answer: "We welcome both bachelor and master students. " },
    { ask: "Why do I need to upload my CV in the registration form?", answer: "Uploading your CV is optional. We ask you to upload your CV if one of our sponsors or participating companies at SEM would like to know more about you." },
  ];

}
