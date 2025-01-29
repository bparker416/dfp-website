import {Component, OnInit} from '@angular/core';
import {Cheese} from "../../../models/food-menu-models/cheese/cheese";
import {CheeseService} from "../../../models/food-menu-models/cheese/cheese.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {CheeseComponent} from "../../../food-menu/build-your-own/cheese/cheese.component";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {} from "@angular/common/http";

@Component({
  selector: 'app-updates-cheese',
  standalone: true,
  imports: [CheeseComponent, FormsModule, NgIf, NgForOf, CommonModule, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule],
  templateUrl: './updates-cheese.component.html',
  styleUrl: './updates-cheese.component.css'
})
export class UpdatesCheeseComponent implements OnInit {
  cheeses: any[] = [];

  currentCheese: Cheese = {
    cheese_id: 0,
    cheese_name: '',
    cheese_price: 0,
    cheese_active: false
  };

  isEditMode = false;

  constructor(private cheeseService : CheeseService) { }

  ngOnInit(): void {
    this.cheeseService.getAllCheese().subscribe((data) => { this.cheeses = data });
  }

  loadCheese(): void {
    this.cheeseService.getAllCheese().subscribe((data) => { this.cheeses = data });
  }

  initNewCheese(): void {
    this.isEditMode = false;
    this.currentCheese = {
      cheese_id: 0,
      cheese_name: '',
      cheese_price: 0,
      cheese_active: false
    };
  }

  editCheese(cheese: Cheese): void {
    this.isEditMode = true;
    // Make copy of cheese array to edit
    this.currentCheese = { ...cheese };
  }

  deleteCheese(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure you want to delete this Cheese?")) {
      this.cheeseService.deleteCheese(id).subscribe({
        next: () => {
          this.cheeses = this.cheeses.filter((cheese) => cheese.id !== id);
        }
      });
    }
  }

  toggleCheeseActive(id: number | undefined): void {
    if (!id) return;
    this.cheeseService.toggleCheeseActive(id).subscribe({
      next: (updateCheese) => {
        const index = this.cheeses.findIndex((cheese) => cheese.cheese_id === updateCheese.cheese_id);
        if (index != -1) {
          this.cheeses[index] = updateCheese;
        }
      }
    });
  }

  saveCheese(): void {
    if (this.isEditMode && this.currentCheese.cheese_id) {
      // Update existing cheese
      this.cheeseService.updateCheese(this.currentCheese.cheese_id, this.currentCheese).subscribe({
        next: (updateCheese) => {
          const index = this.cheeses.findIndex((cheese) => cheese.cheese_id === updateCheese.cheese_id);
          if (index !== -1) {
            this.cheeses[index] = updateCheese;
          }
          // Form reset
          this.isEditMode = false;
          this.currentCheese = {
            cheese_id: 0,
            cheese_name: '',
            cheese_price: 0,
            cheese_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new cheese
      this.cheeseService.createCheese(this.currentCheese).subscribe({
        next: (updateCheese) => {
          this.cheeses.push(updateCheese);
          // Form reset
          this.currentCheese = {
            cheese_id: 0,
            cheese_name: '',
            cheese_price: 0,
            cheese_active: false
          };
        },
        error: (err) => console.error("Could not create.", err)
      });
    }
  }
}
