import { Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { MenuComponent } from "./menu/menu.component";
import { DrinksComponent } from "./drinks/drinks.component";
import { SocialEventsComponent } from "./social-events/social-events.component";



export const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'about', component: AboutComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'drinks', component: DrinksComponent},
  { path: 'social-events', component: SocialEventsComponent},
];
