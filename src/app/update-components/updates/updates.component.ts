import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DrinksComponent} from "../../drink-menu/drinks/drinks.component";
import {UpdatesDrinksComponent} from "../drink-menu-updates/updates-drinks/updates-drinks.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-updates',
  standalone: true,
  imports: [
    FormsModule, DrinksComponent, UpdatesDrinksComponent, HttpClientModule, CommonModule
  ],
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.css'
})
export class UpdatesComponent {

  constructor() {
  }
}
