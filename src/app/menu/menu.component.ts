import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import {PizzaListComponent} from "../pizza-list/pizza-list.component";
import {HttpClientModule} from "@angular/common/http";
import {PizzaService} from "../models/pizza/pizza.service";
import {AppetizerService} from "../models/appetizer/appetizer.service";
import {AppetizerComponent} from "../appetizer/appetizer.component";
import {SideComponent} from "../side/side.component";
import {SideService} from "../models/side/side.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HeaderComponent, PizzaListComponent, AppetizerComponent, HttpClientModule, SideComponent],
  providers: [PizzaService, AppetizerService, SideService],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private pizzaService: PizzaService, private appetizerService: AppetizerService, private sideService: SideService) {}
}
