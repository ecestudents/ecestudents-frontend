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
      text: ["Do you have a face that can be the face of ECE Students?",
        "Being the president will give you the responsibility of guiding the organization in the right direction with the help of your fellow board members. You will need to be the driving force behind this team’s motivation and help them exceed their potential.",
        "Your day-to-day work will involve representing ECE Students at events, conferences and meetups. You will be involved in the sales processes of finding sponsors and the political work of positioning the organisation among the various interests of its stakeholders.",
        "So, do you have what it takes to be The President?"
      ],
      skills: ["Strategic thinking",
        "Business etiquette",
        "Public speaking",
        "Leadership"
      ]
    },
    { name: "Vice President", icon: "Rhino", text: "" },
    { name: "Programme Manager", icon: "Elephant", text: "" },
    { name: "External Relations Manager", icon: "Gorilla", text: "" },
    { name: "Marketing & Tech manager", icon: "Giraffe", text: "" }
  ]

  dialogRef: MatDialogRef<BasicDialog>;

  constructor(private dialog: MatDialog) { }

  openDialog(item) {
    console.log(item)
    this.dialogRef = this.dialog.open(BasicDialog, { data: item });
  }
}

