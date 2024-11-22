import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import {PizzaListComponent} from "../pizza-list/pizza-list.component";
import {HttpClientModule} from "@angular/common/http";
import {PizzaService} from "../models/pizza/pizza.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HeaderComponent, PizzaListComponent, HttpClientModule],
  providers: [PizzaService],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private pizzaService: PizzaService) {}
}
