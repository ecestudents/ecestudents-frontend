import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobportal',
  templateUrl: './template.pug',
  styleUrls: ['./style.scss']
})
export class JobportalComponent implements OnInit {
  sphere = 'pages/jobportal/JobPortalSphere';
  portrait = 'pages/jobportal/succesgirl';
  asset1 = 'pages/jobportal/Asset_3';
  asset2 = 'pages/jobportal/Asset_5';
  asset3 = 'pages/jobportal/Asset_2';
  asset4 = 'pages/jobportal/Asset_4';

  constructor() { }

  ngOnInit() {
    var qs, js, q, s, d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm"
    if (!gi.call(d, id)) {
      js.id = id;
      q = gt.call(d, "script")[0];
      q.parentNode.insertBefore(js, q)
    }
  }
}
