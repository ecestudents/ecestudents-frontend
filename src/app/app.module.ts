//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/component';
import { ICComponent } from './pages/events/ic/component';
import { IdeaLabComponent } from './pages/events/idealab/component';
import { SEMComponent } from './pages/events/sem/component';
import { HBGComponent } from './pages/events/24hbg/component';
import { DCubeComponent } from './pages/events/dcube/component';
import { ICCommitteeComponent } from './pages/committees/ic/component';
import { IdeaLabCommitteeComponent } from './pages/committees/idealab/component';
import { SEMCommitteeComponent } from './pages/committees/sem/component';
import { HBGCommitteeComponent } from './pages/committees/24hbg/component';
import { DCubeCommitteeComponent } from './pages/committees/dcube/component';

//parts
import { FooterComponent } from './parts/footer/component';
import { MainMenuComponent } from './parts/main_menu/component';
import { HeaderComponent } from './parts/header/component';

//helpers
import { CloudinaryPipe } from './helpers/cloudinary/pipe';

//routes

const appRoutes: Routes = [
  { path: '',               component: HomepageComponent },
  { path: 'events/ic',             component: ICComponent },
  { path: 'events/idealab',             component: IdeaLabComponent },
  { path: 'events/sem',             component: SEMComponent },
  { path: 'events/24hbg',             component: HBGComponent },
  { path: 'events/dcube',             component: DCubeComponent},
  { path: 'committees/ic',             component: ICCommitteeComponent },
  { path: 'committees/idealab',             component: IdeaLabCommitteeComponent },
  { path: 'committees/sem',             component: SEMCommitteeComponent },
  { path: 'committees/24hbg',             component: HBGCommitteeComponent },
  { path: 'committees/dcube',             component: DCubeCommitteeComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ICComponent,
    IdeaLabComponent,
    SEMComponent,
    HBGComponent,
    DCubeComponent,
    ICCommitteeComponent,
    IdeaLabCommitteeComponent,
    SEMCommitteeComponent,
    HBGCommitteeComponent,
    DCubeCommitteeComponent,
    FooterComponent,
    MainMenuComponent,
    HeaderComponent,
    CloudinaryPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
