import {Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {MenuComponent} from "./food-menu/menu/menu.component";
import {SocialEventsComponent} from "./social-events/social-events.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {DrinkMenuComponent} from "./drink-menu/drink-menu/drink-menu.component";
import {UpdatesComponent} from "./update-components/updates/updates.component";
import {
  UpdatesCocktailsComponent
} from "./update-components/drink-menu-updates/updates-cocktails/updates-cocktails.component";
import {
  UpdatesLibationsComponent
} from "./update-components/drink-menu-updates/updates-libations/updates-libations.component";
import {
  UpdatesMocktailsComponent
} from "./update-components/drink-menu-updates/updates-mocktails/updates-mocktails.component";
import {UpdatesDrinksComponent} from "./update-components/drink-menu-updates/updates-drinks/updates-drinks.component";
import {
  UpdatesAppetizerComponent
} from "./update-components/food-menu-updates/updates-appetizer/updates-appetizer.component";
import {UpdatesSidesComponent} from "./update-components/food-menu-updates/updates-sides/updates-sides.component";
import {UpdatesSaladComponent} from "./update-components/food-menu-updates/updates-salad/updates-salad.component";
import {UpdatesSandoComponent} from "./update-components/food-menu-updates/updates-sando/updates-sando.component";
import {UpdatesSauceComponent} from "./update-components/food-menu-updates/updates-sauce/updates-sauce.component";
import {UpdatesCheeseComponent} from "./update-components/food-menu-updates/updates-cheese/updates-cheese.component";
import {UpdatesVeggieComponent} from "./update-components/food-menu-updates/updates-veggie/updates-veggie.component";
import {UpdatesMeatComponent} from "./update-components/food-menu-updates/updates-meat/updates-meat.component";
import {UpdatesPizzaComponent} from "./update-components/food-menu-updates/updates-pizza/updates-pizza.component";
import {UpdatesDessertComponent} from "./update-components/food-menu-updates/updates-dessert/updates-dessert.component";
import {authGuard} from "./auth/auth.guard";


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'drinks', component: DrinkMenuComponent },
  { path: 'social-events', component: SocialEventsComponent },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)},
  { path: 'updates', canActivate: [authGuard], loadComponent: () => import('./update-components/updates/updates.component').then(m => m.UpdatesComponent), children: [
      {
        path : 'updates-cocktails',
        component: UpdatesCocktailsComponent
      },
      {
        path : 'updates-libations',
        component: UpdatesLibationsComponent
      },
      {
        path : 'updates-mocktails',
        component: UpdatesMocktailsComponent
      },
      {
        path : 'updates-drinks',
        component: UpdatesDrinksComponent
      },
      {
        path : 'updates-appetizer',
        component: UpdatesAppetizerComponent
      },
      {
        path : 'updates-sides',
        component: UpdatesSidesComponent
      },
      {
        path : 'updates-salad',
        component: UpdatesSaladComponent
      },
      {
        path : 'updates-sando',
        component: UpdatesSandoComponent
      },
      {
        path : 'updates-sauce',
        component: UpdatesSauceComponent
      },
      {
        path : 'updates-cheese',
        component: UpdatesCheeseComponent
      },
      {
        path : 'updates-veggies',
        component: UpdatesVeggieComponent
      },
      {
        path : 'updates-meat',
        component: UpdatesMeatComponent
      },
      {
        path : 'updates-pizza',
        component: UpdatesPizzaComponent
      },
      {
        path : 'updates-dessert',
        component: UpdatesDessertComponent
      }
    ]},
  { path: '**', component: PageNotFoundComponent },
];
