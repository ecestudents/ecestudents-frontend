import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-basicdialog',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})
export class BasicDialog {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }
}
