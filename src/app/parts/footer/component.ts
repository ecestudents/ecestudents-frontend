import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class FooterComponent {

  social = [

    { icon: "fb", href: "https://www.facebook.com/ECEStudents" },
    { icon: "ln", href: "https://www.linkedin.com/company/4997540/" },
    { icon: "insta", href: "https://www.instagram.com/ecestudents/" },
    { icon: "twit", href: "https://twitter.com/ECEStudents" }

  ];

  roadmap = [

    { link: "SEM", href: "http://events.ecestudents.com/sem" },
    { link: "Summit Trip", href: "http://events.ecestudents.com/studytrip" },
    { link: "Cleantech Challenge", href: "https://www.facebook.com/ECEStudents/" },
    { link: "Innovation Challenge", href: "https://www.facebook.com/ECEStudents/" },
    { link: "The big event", href: "https://www.facebook.com/ECEStudents/" }

  ];

}
