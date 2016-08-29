import { Routes, RouterModule, provideRouter } from '@angular/router';
import { AuthComponent } from "../auth/auth.component";
import { CharacterListComponent } from "../characterList/characterList.component";
import { AppComponent } from "./app.component"
import { NavBarComponent } from "../navbar/navbar.component";
import { HomeComponent } from "../home/home.component";

const appRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'characterList',
    component: CharacterListComponent
  },
  {
    path: '',
    component: HomeComponent
  }
  
];

export const APP_ROUTER_PROVIDERS = [provideRouter(appRoutes)];