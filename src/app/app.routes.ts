import { Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { MenuComponent } from "./menu/menu.component";
import { DrinksComponent } from "./drinks/drinks.component";
import { SocialEventsComponent } from "./social-events/social-events.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'social-events', component: SocialEventsComponent },
  { path: '**', component: PageNotFoundComponent },
];
