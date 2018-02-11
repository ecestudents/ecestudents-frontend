//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//pages
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/component';
import { JobportalComponent } from './pages/jobportal/component';
import { EventPageComponent } from './pages/event-page/component'
//parts
import { FooterComponent } from './parts/footer/component';
import { MainMenuComponent } from './parts/main_menu/component';

//helpers
import { CloudinaryPipe } from './helpers/cloudinary/pipe';
import { DataService } from './helpers/dataservice/dataservice';


//routes

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'events/:id', component: EventPageComponent },
  { path: 'jobs', component: JobportalComponent },
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
    EventPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [DataService, HttpClientModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
