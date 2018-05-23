//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CountdownModule } from 'ngx-countdown';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

//pages
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/component';
import { JobportalComponent } from './pages/jobportal/component';
import { EventPageComponent } from './pages/event-page/component';
import { HBGComponent } from './pages/events/24hbg/component';
import { BoardRecruitmentComponent } from './pages/board_recruitment/component';
import { EventsOverviewComponent } from './pages/events-overview/component';

//parts
import { FooterComponent } from './parts/footer/component';
import { MainMenuComponent } from './parts/main_menu/component';
import { BasicDialog } from './parts/dialog/component';

//helpers
import { CloudinaryPipe } from './helpers/cloudinary/pipe';
import { DataService } from './helpers/dataservice/dataservice';
import { StateService } from './helpers/stateservice/stateservice';
import { PodcastComponent } from './pages/podcast/podcast.component';



//routes

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'events', component: EventsOverviewComponent },
  //{ path: 'events/24hbg', component: HBGComponent },
  //{ path: 'events/:id', component: EventPageComponent },
  { path: 'jobs', component: JobportalComponent },
  { path: 'podcast', component: PodcastComponent },
  //{ path: 'board2018', component: BoardRecruitmentComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    MainMenuComponent,
    CloudinaryPipe,
    JobportalComponent,
    EventPageComponent,
    HBGComponent,
    BoardRecruitmentComponent,
    BasicDialog,
    EventsOverviewComponent,
    PodcastComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CountdownModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot()
  ],
  entryComponents: [BasicDialog],
  providers: [DataService, HttpClientModule, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
