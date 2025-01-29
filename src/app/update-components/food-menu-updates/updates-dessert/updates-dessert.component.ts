import {Component, OnInit} from '@angular/core';
import {Dessert} from "../../../models/food-menu-models/dessert/dessert";
import {DessertService} from "../../../models/food-menu-models/dessert/dessert.service";
import {DessertComponent} from "../../../food-menu/dessert/dessert.component";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {} from "@angular/common/http";

@Component({
  selector: 'app-updates-dessert',
  standalone: true,
  imports: [DessertComponent, FormsModule, NgIf, NgForOf, CommonModule, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule],
  templateUrl: './updates-dessert.component.html',
  styleUrl: './updates-dessert.component.css'
})
export class UpdatesDessertComponent implements OnInit {
  desserts: any[] = [];

  currentDessert: Dessert = {
    dessert_id: 0,
    dessert_name: '',
    dessert_price: 0,
    dessert_description: '',
    additional_text: '',
    dessert_active: false
  };

  isEditMode = false;

  constructor(private dessertService: DessertService) { }

  ngOnInit(): void {
    this.dessertService.getDesserts().subscribe((data) => { this.desserts = data });
  }

  loadDesserts(): void {
    this.dessertService.getDesserts().subscribe((data) => { this.desserts = data });
  }

  initNewDessert(): void {
    this.isEditMode = false;
    this.currentDessert = {
      dessert_id: 0,
      dessert_name: '',
      dessert_price: 0,
      dessert_description: '',
      additional_text: '',
      dessert_active: false
    };
  }

  editDessert(dessert: Dessert): void {
    this.isEditMode = true;
    // Make copy of dessert array to edit
    this.currentDessert = { ...dessert };
  }

  deleteDessert(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure you want to delete this Dessert?")) {
      this.dessertService.deleteDessert(id).subscribe({
        next: () => {
          this.desserts = this.desserts.filter((dessert) => dessert.dessert_id != id);
        }
      });
    }
  }

  toggleDessertActive(id: number | undefined): void {
    if (!id) return;
    this.dessertService.toggleDessertActive(id).subscribe({
      next: (updateDessert) => {
        const index = this.desserts.findIndex((dessert) => dessert.dessert_id === updateDessert.dessert_id);
        if (index !== -1) {
          this.desserts[index] = updateDessert;
        }
      }
    });
  }

  saveDessert(): void {
    if (this.isEditMode && this.currentDessert.dessert_id) {
      // Update existing desserts
      this.dessertService.updateDessert(this.currentDessert.dessert_id, this.currentDessert).subscribe({
        next: (updateDessert) => {
          const index = this.desserts.findIndex((dessert) => dessert.dessert_id === updateDessert.dessert_id);
          if (index !== -1) {
            this.desserts[index] = updateDessert;
          }
          // Form reset
          this.isEditMode = false;
          this.currentDessert = {
            dessert_id: 0,
            dessert_name: '',
            dessert_price: 0,
            dessert_description: '',
            additional_text: '',
            dessert_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new desserts
      this.dessertService.createDessert(this.currentDessert).subscribe({
        next: (updateDessert) => {
          this.desserts.push(updateDessert);
          // Form reset
          this.currentDessert = {
            dessert_id: 0,
            dessert_name: '',
            dessert_price: 0,
            dessert_description: '',
            additional_text: '',
            dessert_active: false
          };
        },
        error: (err) => console.error("Could not create.", err)
      });
    }
  }

}
