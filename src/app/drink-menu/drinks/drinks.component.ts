import {Component, OnInit} from '@angular/core';
import {DrinksService} from "../../models/drink-menu-models/drinks/drinks.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {Drinks} from "../../models/drink-menu-models/drinks/drinks";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent implements OnInit{
  drinks: any[] = [];

  currentDrink: Drinks = {
    drink_id: 0,
    drink_name: '',
    drink_price: 0,
    drink_description: '',
    drink_active: false
  };

  isEditMode = false;

  constructor(private drinksService: DrinksService) { }

  ngOnInit(): void {
    this.drinksService.getDrinks().subscribe((data) => { this.drinks = data });
  }

  loadDrinks(): void {
    this.drinksService.getDrinks().subscribe((data) => { this.drinks = data });
  }

  initNewDrink(): void {
    this.isEditMode = false;
    this.currentDrink = {
      drink_id: 0,
      drink_name: '',
      drink_price: 0,
      drink_description: '',
      drink_active: false
    };
  }

  editDrink(drink: Drinks): void {
    this.isEditMode = true;
    // Make copy of drink array to edit
    this.currentDrink = { ...drink };
  }

  deleteDrink(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure you want to delete this drink?")) {
      this.drinksService.deleteDrink(id).subscribe({
        next: () => {
          this.drinks = this.drinks.filter((drink) => drink.id !== id);
        }
      });
    }
  }

  toggleDrinkActive(id: number | undefined): void {
    if (!id) return;
    this.drinksService.toggleDrinkActive(id).subscribe({
      next: (updateDrink) => {
        const index = this.drinks.findIndex((drink) => drink.drink_id === updateDrink.drink_id);
        if (index !== -1) {
          this.drinks[index] = updateDrink;
        }
      }
    });
  }

  saveDrink(): void {
    if (this.isEditMode && this.currentDrink.drink_id) {
      // Update existing drinks
      this.drinksService.updateDrink(this.currentDrink.drink_id, this.currentDrink).subscribe({
        next: (updateDrink) => {
          const index = this.drinks.findIndex((drink) => drink.drink_id === updateDrink.drink_id);
          if (index !== -1) {
            this.drinks[index] = updateDrink;
          }
          // Form reset
          this.isEditMode = false;
          this.currentDrink = {
            drink_id: 0,
            drink_name: '',
            drink_price: 0,
            drink_description: '',
            drink_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new drinks
      this.drinksService.createDrink(this.currentDrink).subscribe({
        next: (updateDrink) => {
          this.drinks.push(updateDrink);
          // Form reset
          this.currentDrink = {
            drink_id: 0,
            drink_name: '',
            drink_price: 0,
            drink_description: '',
            drink_active: false
          };
        },
        error: (err) => console.error("Could not create.", err)
      });
    }
  }
}
