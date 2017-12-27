//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/component';
import { ICComponent } from './pages/ic/component';
import { IdeaLabComponent } from './pages/idealab/component';
import { SEMComponent } from './pages/sem/component';
import { HBGComponent } from './pages/24hbg/component';

//parts
import { FooterComponent } from './parts/footer/component';
import { MainMenuComponent } from './parts/main_menu/component';
import { HeaderComponent } from './parts/header/component';

//helpers
import { CloudinaryPipe } from './helpers/cloudinary/pipe';

//routes

const appRoutes: Routes = [
  { path: '',               component: HomepageComponent },
  { path: 'ic',             component: ICComponent },
  { path: 'idealab',             component: IdeaLabComponent },
  { path: 'sem',             component: SEMComponent },
  { path: 'sem',             component: SEMComponent },
  { path: '24hbg',             component: HBGComponent },
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
