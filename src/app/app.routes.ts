import { Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { MenuComponent } from "./food-menu/menu/menu.component";
import { DrinksComponent } from "./drink-menu/drinks/drinks.component";
import { SocialEventsComponent } from "./social-events/social-events.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {DrinkMenuComponent} from "./drink-menu/drink-menu/drink-menu.component";
import {LoginComponent} from "./login/login.component";
import {UpdatesComponent} from "./update-components/updates/updates.component";



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'drinks', component: DrinkMenuComponent },
  { path: 'social-events', component: SocialEventsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: '**', component: PageNotFoundComponent },
];
