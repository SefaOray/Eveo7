import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModule } from '@angular/core';
import { AppComponent } from './app/components/app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/components/app/app.routing';
import {HTTP_PROVIDERS} from '@angular/http';

if (true) {
  enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS]);