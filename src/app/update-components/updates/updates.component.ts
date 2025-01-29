import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DrinksComponent} from "../../drink-menu/drinks/drinks.component";
import {UpdatesDrinksComponent} from "../drink-menu-updates/updates-drinks/updates-drinks.component";
import {} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {LibationsComponent} from "../../drink-menu/libations/libations.component";
import {UpdatesLibationsComponent} from "../drink-menu-updates/updates-libations/updates-libations.component";
import {CocktailsComponent} from "../../drink-menu/cocktails/cocktails.component";
import {UpdatesCocktailsComponent} from "../drink-menu-updates/updates-cocktails/updates-cocktails.component";
import {UpdatesMocktailsComponent} from "../drink-menu-updates/updates-mocktails/updates-mocktails.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {UpdatesAppetizerComponent} from "../food-menu-updates/updates-appetizer/updates-appetizer.component";
import {UpdatesMeatComponent} from "../food-menu-updates/updates-meat/updates-meat.component";
import {UpdatesPizzaComponent} from "../food-menu-updates/updates-pizza/updates-pizza.component";
import {UpdatesSaladComponent} from "../food-menu-updates/updates-salad/updates-salad.component";
import {UpdatesSandoComponent} from "../food-menu-updates/updates-sando/updates-sando.component";
import {UpdatesSauceComponent} from "../food-menu-updates/updates-sauce/updates-sauce.component";
import {UpdatesSidesComponent} from "../food-menu-updates/updates-sides/updates-sides.component";
import {UpdatesVeggieComponent} from "../food-menu-updates/updates-veggie/updates-veggie.component";
import {UpdatesCheeseComponent} from "../food-menu-updates/updates-cheese/updates-cheese.component";
import {UpdatesDessertComponent} from "../food-menu-updates/updates-dessert/updates-dessert.component";
import {DrinksService} from "../../models/drink-menu-models/drinks/drinks.service";
import {DessertService} from "../../models/food-menu-models/dessert/dessert.service";
import {SearchService} from "../../models/menu-search/search.service";

@Component({
  selector: 'app-updates',
  standalone: true,
  imports: [
    FormsModule, DrinksComponent, LibationsComponent, CocktailsComponent, UpdatesDrinksComponent, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule, CommonModule, UpdatesLibationsComponent, UpdatesCocktailsComponent, UpdatesMocktailsComponent, RouterLinkActive, RouterLink, UpdatesAppetizerComponent, UpdatesMeatComponent, UpdatesPizzaComponent, UpdatesSaladComponent, UpdatesSandoComponent, UpdatesSauceComponent, UpdatesSidesComponent, UpdatesVeggieComponent, UpdatesCheeseComponent, UpdatesDessertComponent, RouterOutlet
  ],
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.css'
})
export class UpdatesComponent {
  searchQuery: string = '';
  menuResults: string[] = [];

  constructor(private searchService: SearchService) {}

  // Food/drink menu unified item search
  search() {
    if (this.searchQuery.trim() !== '') {
      this.searchService.searchMenuItems(this.searchQuery).subscribe(
        (data) => {
          this.menuResults = data;
        },
        (error) => {
          console.error('Could not get items', error)
        }
      );
    } else {
      this.menuResults = [];
    }
  }
}
