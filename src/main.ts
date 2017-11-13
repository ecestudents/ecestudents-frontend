import 'core-js/es7/reflect';
// Angular wants it
import 'zone.js/dist/zone';
// Styles
import "./main.scss";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

import '@angular/platform-browser/animations';

//enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
