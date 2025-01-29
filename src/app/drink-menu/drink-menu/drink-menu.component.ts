import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {DrinksComponent} from "../drinks/drinks.component";
import {CocktailsComponent} from "../cocktails/cocktails.component";
import {LibationsComponent} from "../libations/libations.component";
import {MocktailsComponent} from "../mocktails/mocktails.component";
import {} from "@angular/common/http";
import {DrinksService} from "../../models/drink-menu-models/drinks/drinks.service";
import {CocktailsService} from "../../models/drink-menu-models/cocktails/cocktails.service";
import {AppetizerComponent} from "../../food-menu/appetizer/appetizer.component";
import {ByoComponent} from "../../food-menu/build-your-own/byo/byo.component";
import {DessertComponent} from "../../food-menu/dessert/dessert.component";
import {PizzaComponent} from "../../food-menu/pizza/pizza.component";
import {SaladComponent} from "../../food-menu/salad/salad.component";
import {SandoComponent} from "../../food-menu/sando/sando.component";
import {SideComponent} from "../../food-menu/side/side.component";
import {LibationsService} from "../../models/drink-menu-models/libations/libations.service";
import {MocktailsService} from "../../models/drink-menu-models/mocktails/mocktails.service";

@Component({
    selector: 'app-drink-menu',
    imports: [CommonModule, DrinksComponent, CocktailsComponent, LibationsComponent, MocktailsComponent,
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        AppetizerComponent, ByoComponent, DessertComponent, PizzaComponent, SaladComponent, SandoComponent, SideComponent],
    providers: [DrinksService, CocktailsService, LibationsService, MocktailsService],
    templateUrl: './drink-menu.component.html',
    styleUrl: './drink-menu.component.css'
})
export class DrinkMenuComponent {
  constructor(
    private drinksService: DrinksService,
    private cocktailService: CocktailsService,
    private mocktailService: MocktailsService,
    private libationsService: LibationsService,
  ) {
  }
}
