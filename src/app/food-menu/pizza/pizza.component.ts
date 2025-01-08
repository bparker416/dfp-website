import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PizzaService} from "../../models/food-menu-models/pizza/pizza.service";
import {PizzaModule} from "../../models/food-menu-models/pizza/pizza";

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent implements OnInit {
  pizzas: any[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzaService.getActivePizzas().subscribe((data) => {this.pizzas = data});
  }
}
