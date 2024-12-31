import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DrinksComponent} from "../../drink-menu/drinks/drinks.component";
import {UpdatesDrinksComponent} from "../drink-menu-updates/updates-drinks/updates-drinks.component";
import {HttpClientModule} from "@angular/common/http";
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

@Component({
  selector: 'app-updates',
  standalone: true,
  imports: [
    FormsModule, DrinksComponent, LibationsComponent, CocktailsComponent, UpdatesDrinksComponent, HttpClientModule, CommonModule, UpdatesLibationsComponent, UpdatesCocktailsComponent, UpdatesMocktailsComponent, RouterLinkActive, RouterLink, UpdatesAppetizerComponent, UpdatesMeatComponent, UpdatesPizzaComponent, UpdatesSaladComponent, UpdatesSandoComponent, UpdatesSauceComponent, UpdatesSidesComponent, UpdatesVeggieComponent, UpdatesCheeseComponent, UpdatesDessertComponent, RouterOutlet
  ],
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.css'
})
export class UpdatesComponent {

  constructor() {
  }
}
