import {Component, OnInit} from '@angular/core';
import {PizzaModule} from "../../../models/food-menu-models/pizza/pizza";
import {PizzaService} from "../../../models/food-menu-models/pizza/pizza.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-updates-pizza',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './updates-pizza.component.html',
  styleUrl: './updates-pizza.component.css'
})
export class UpdatesPizzaComponent implements OnInit {
  pizzas: any[] = [];

  currentPizza: PizzaModule = {
    pizza_id: 0,
    pizza_name: '',
    small_price: 0,
    large_price: 0,
    pizza_description: '',
    additional_text: '',
    pizza_active: false
  };

  isEditMode = false;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe((data) => { this.pizzas = data });
  }

  loadPizzas(): void {
    this.pizzaService.getPizzas().subscribe((data) => { this.pizzas = data });
  }

  initNewPizza(): void {
    this.isEditMode = false;
    this.currentPizza = {
      pizza_id: 0,
      pizza_name: '',
      small_price: 0,
      large_price: 0,
      pizza_description: '',
      additional_text: '',
      pizza_active: false
    };
  }

  editPizza(pizza: PizzaModule): void {
    this.isEditMode = true;
    // Make copy of pizza array to edit
    this.currentPizza = { ...pizza };
  }

  deletePizza(id: number | undefined): void {
    if(!id) return;
    if (confirm("Are you sure you want to delete this Dessert?")) {
      this.pizzaService.deletePizza(id).subscribe({
        next: () => {
          this.pizzas = this.pizzas.filter((pizza) => pizza.id != id);
        }
      });
    }
  }

  togglePizzaActive(id: number | undefined): void {
    if (!id) return;
    this.pizzaService.togglePizzaActive(id).subscribe({
      next: (updatePizza) => {
        const index = this.pizzas.findIndex((pizza) => pizza.pizza_id === updatePizza.pizza_id);
        if (index !== -1) {
          this.pizzas[index] = updatePizza;
        }
      }
    });
  }

  savePizza(): void {
    if (this.isEditMode && this.currentPizza.pizza_id) {
      // Update existing pizzas
      this.pizzaService.updatePizza(this.currentPizza.pizza_id, this.currentPizza).subscribe({
        next: (updatePizza) => {
          const index = this.pizzas.findIndex((pizza) => pizza.pizza_id === updatePizza.pizza_id);
          if (index !== -1) {
            this.pizzas[index] = updatePizza;
          }
          // Form reset
          this.isEditMode = false;
          this.currentPizza = {
            pizza_id: 0,
            pizza_name: '',
            small_price: 0,
            large_price: 0,
            pizza_description: '',
            additional_text: '',
            pizza_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new pizzas
      this.pizzaService.createPizza(this.currentPizza).subscribe({
        next: (updatePizza) => {
          this.pizzas.push(updatePizza);
          // Form reset
          this.currentPizza = {
            pizza_id: 0,
            pizza_name: '',
            small_price: 0,
            large_price: 0,
            pizza_description: '',
            additional_text: '',
            pizza_active: false
          };
        },
        error: (err) => console.error("Could not create.", err)
      });
    }
  }

}
