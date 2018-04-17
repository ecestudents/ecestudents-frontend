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

  faq = [
    {
      ask: "Do I necessarily need to have an idea to join 24HBG?",
      answer: "No! There will be a workshop specifically for ideation, you can come up with an idea during the event."
    },
    {
      ask: "Can I sign up individually?",
      answer: "You can sign up individually and you will be added to the 24HBG participant FB group where you can find teammates yourself. You can also sign up as a partial team and find teammates this way as well. If you have found teammates each of you must send an email to 24hbg@ecestudents.com before 8 May 23:59h with each other’s first and last names. If we don't receive an email from you by this date, we will assign you to a team based on the preferences you mentioned in the sign up form. You will be notified of this by 10 May."
    },
    {
      ask: "How many people should be in a team?",
      answer: "Suggested team size is between 4 to 6 people."
    },
    {
      ask: "Do I have to be a student at Erasmus University Rotterdam?",
      answer: "No! Any students can attend the event. We welcome Hogeschool students and students from other cities as well."
    },
    {
      ask: "Is this event only for bachelor students?",
      answer: "No, master students are more than welcome."
    },
    {
      ask: "Is there a dress code for the event?",
      answer: "Nope!"
    },
    {
      ask: "Why do I need to upload my CV for registration?",
      answer: "We ask you to upload your CV if one of our sponsors or participating companies at 24HBG would like to know more about you."
    },
    {
      ask: "When is the deadline for signing up? ",
      answer: "6th of May, 23:59"
    },
    {
      ask: "What should I bring to the event?",
      answer: "Stationary and paper will be provided. Laptops are strongly suggested. Consider bringing a sleeping bag as the event is overnight!"
    }
  ]
}
