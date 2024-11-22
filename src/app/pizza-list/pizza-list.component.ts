import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PizzaService} from "../models/pizza/pizza.service";
import {PizzaModule} from "../models/pizza/pizza";

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.css'
})
export class PizzaListComponent implements OnInit {
  pizzas: any[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe((data) => {this.pizzas = data});
  }
}
