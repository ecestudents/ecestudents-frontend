//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
/*import { HomepageComponent } from './pages/homepage/component';
import { ICComponent } from './pages/ic/component';
import { FooterComponent } from './parts/footer/component';
import { HeaderComponent } from './parts/header/component';
*/
//routes

const appRoutes: Routes = [
  //{ path: '',               component: HomepageComponent },
  //{ path: 'ic',             component: ICComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    //HomepageComponent,
    //ICComponent,
    //FooterComponent,
    //HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
