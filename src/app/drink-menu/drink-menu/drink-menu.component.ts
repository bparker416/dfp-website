import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {DrinksComponent} from "../drinks/drinks.component";
import {CocktailsComponent} from "../cocktails/cocktails.component";
import {LibationsComponent} from "../libations/libations.component";
import {MocktailsComponent} from "../mocktails/mocktails.component";
import {HttpClientModule} from "@angular/common/http";
import {DrinksService} from "../../models/drink-menu-models/drinks/drinks.service";
import {CocktailsService} from "../../models/drink-menu-models/cocktails/cocktails.service";

@Component({
  selector: 'app-drink-menu',
  standalone: true,
  imports: [CommonModule, DrinksComponent, CocktailsComponent, LibationsComponent, MocktailsComponent, HttpClientModule],
  providers: [DrinksService, CocktailsService],
  templateUrl: './drink-menu.component.html',
  styleUrl: './drink-menu.component.css'
})
export class DrinkMenuComponent {
  constructor(
    private drinksService: DrinksService,
    private cocktailService: CocktailsService
  ) {
  }
}
