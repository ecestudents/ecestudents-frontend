import { Component, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BasicDialog } from '../../parts/dialog/component';

@Component({
  selector: 'app-board-recruitment',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})


export class BoardRecruitmentComponent {
  positions = [
    {
      name: "President", icon: "Lion", tagline: "Drawing the lines",
      text: [
        "Do you have a face that can be the face of ECE Students?",
        "Being the president will give you the responsibility of guiding the organization in the right direction with the help of your fellow board members. You will need to be the driving force behind this team’s motivation and help them exceed their potential.",
        "Your day-to-day work will involve representing ECE Students at events, conferences and meetups. You will be involved in the sales processes of finding sponsors and the political work of positioning the organisation among the various interests of its stakeholders.",
        "So, do you have what it takes to be The President?"
      ],
      required_skills: [
        "Strategic thinking",
        "Business etiquette",
        "Public speaking",
        "Leadership"
      ],
      preferred_skills: false,
      two: false
    },
    {
      name: "Vice President", icon: "Rhino", tagline: "Painting the picture",
      text: ["In the Board, the VP screams with passion on the sidelines as he/she not only paints the picture, but enjoys seeing the rest of the organization paint it together! By delving deeper into the organisations’ nits and grits, the VP takes care of tasks such as internal affairs, recruitment, administrative work, and financial management. Furthermore this position involves the planning of future investments and allocation of our budget across our events for the entire year. If you think task management, keeping an overview, and analytical skills are some of your strong suits, the VP position is a match!"
      ],
      required_skills: [
        "Finance",
        "Strategic thinking",
        "Highly Organized",
        "Communication",
        "HR"
      ],
      preferred_skills: ["Accounting"],
      two: false
    },
    {
      name: "Programme Manager", icon: "Elephant", tagline: "Creating Opportunities",
      text: [
        "ECE Students hosts several entrepreneurial events for creative ideas to blossom. The Programme Manager is at the centre of this essence with a capacity to translate visions into reality. You will be responsible for leading, motivating and delegating responsibilities to 3 event committees.",
        "With one eye at the bottom line and the other at the horizon, the Programme Manager is the brain, heart and sinew of all events. It's about keeping your team focused on a goal and motivated to do their best to achieve it, especially when the stakes are high and the consequences really matter. It is about laying the groundwork for others' success, and then standing back and letting them shine.",
        "So are you the crazy maverick that can inspire, build and create? Then this is the position for you!"
      ],
      required_skills: ["Leadership",
        "Highly Organized",
        "Strategic thinking",
        "Event Planning"
      ],
      preferred_skills: false,
      two: true
    },
    {
      name: "External Relations Manager", icon: "Gorilla", tagline: "Building partnerships",
      text: [
        "Can you be charming yet get the job done? Are you a smooth operator that can bring in paper?",
        "Then maybe you have what it takes to be our External Relations Manager!",
        "Your tasks will involve managing relationships with existing partners, generating new leads and converting them into partners, supporting the sales team to reach their objectives, as well as keeping a good overview of the event committees’ external relations activities."
      ],
      required_skills: [
        "Strategic thinking",
        "Business Etiquette",
        "Communication"
      ],
      preferred_skills: false,
      two: true
    },
    {
      name: "Marketing & Tech manager", icon: "Giraffe", tagline: "The growth hacker",
      text: [
        "Always been one to think different? Then expand your creative and strategic skills by applying to be our next Marketing & IT Manager. By managing the marketing and IT committees, your tasks will include formulating and implementing marketing campaigns for the events in our portfolio, promote the amazing and fun community that is ECE Students, as well as create forward-thinking new content for ECE Students’ channels.",
        "As you will be leading the biggest committee of ECE Students, it is important that you have the enthusiasm and spirit to keep your team motivated and help them succeed to their fullest potential. Are you eager to bolster ECE Students’ brand? Then apply to be the next Marketing & IT Manager!"
      ],
      required_skills: [
        "Leadership",
        "Strategic thinking",
        "Creative Mindset",
        "Social Media Management",
        "Understanding of technology"
      ],
      preferred_skills: [
        "Programming Experience",
        "Illustrator",
        "Photoshop",
        "Photography",
        "Videography"],
      two: false
    }
  ]

  dialogRef: MatDialogRef<BasicDialog>;

  constructor(private dialog: MatDialog) { }

  openDialog(item) {
    console.log(item)
    this.dialogRef = this.dialog.open(BasicDialog, { data: item });
  }
}

