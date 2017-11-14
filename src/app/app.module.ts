//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/component';
import { ICComponent } from './pages/ic/component';

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
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ICComponent,
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
