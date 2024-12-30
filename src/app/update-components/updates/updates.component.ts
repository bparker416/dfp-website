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
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-updates',
  standalone: true,
  imports: [
    FormsModule, DrinksComponent, LibationsComponent, CocktailsComponent, UpdatesDrinksComponent, HttpClientModule, CommonModule, UpdatesLibationsComponent, UpdatesCocktailsComponent, UpdatesMocktailsComponent, RouterLinkActive, RouterLink
  ],
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.css'
})
export class UpdatesComponent {

  constructor() {
  }
}
