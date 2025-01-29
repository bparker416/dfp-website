import {Component, OnInit} from '@angular/core';
import {Veggie} from "../../../models/food-menu-models/veggie/veggie";
import {VeggieService} from "../../../models/food-menu-models/veggie/veggie.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {VeggieComponent} from "../../../food-menu/build-your-own/veggie/veggie.component";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {} from "@angular/common/http";

@Component({
  selector: 'app-updates-veggie',
  standalone: true,
  imports: [VeggieComponent, FormsModule, NgIf, NgForOf, CommonModule, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule],
  templateUrl: './updates-veggie.component.html',
  styleUrl: './updates-veggie.component.css'
})
export class UpdatesVeggieComponent implements OnInit {
  veggies: any[] = [];

  currentVeggie: Veggie = {
    veggie_id: 0,
    veggie_name: '',
    veggie_description: '',
    veggie_active: false
  };

  isEditMode = false;

  constructor(private veggieService: VeggieService) { }

  ngOnInit(): void {
    this.veggieService.getVeggies().subscribe((data) => { this.veggies = data });
  }

  loadVeggies(): void {
    this.veggieService.getVeggies().subscribe((data) => this.veggies = data);
  }

  initNewVeggie(): void {
    this.isEditMode = false;
    this.currentVeggie = {
      veggie_id: 0,
      veggie_name: '',
      veggie_description: '',
      veggie_active: false
    };
  }

  editVeggie(veggie: Veggie): void {
    this.isEditMode = true;
    // Make copy of veggie array to edit
    this.currentVeggie = { ...veggie };
  }

  deleteVeggie(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure you want to delete this veggie?")) {
      this.veggieService.deleteVeggie(id).subscribe({
        next: () => {
          this.veggies = this.veggies.filter((veggie) => veggie.id !== id);
        }
      });
    }
  }

  toggleVeggieActive(id: number | undefined): void {
    if (!id) return;
    this.veggieService.toggleVeggieActive(id).subscribe({
      next: (updateVeggie) => {
        const index = this.veggies.findIndex((veggie) => veggie.veggie_id === updateVeggie.veggie_id);
        if (index !== -1) {
          this.veggies[index] = updateVeggie;
        }
      }
    });
  }

  saveVeggie(): void {
    if (this.isEditMode && this.currentVeggie.veggie_id) {
      // Update existing veggies
      this.veggieService.updateVeggie(this.currentVeggie.veggie_id, this.currentVeggie).subscribe({
        next: (updateVeggie) => {
          const index = this.veggies.findIndex((veggie) => veggie.veggie_id === updateVeggie.veggie_id);
          if (index !== -1) {
            this.veggies[index] = updateVeggie;
          }
          // Form reset
          this.isEditMode =  false;
          this.currentVeggie = {
            veggie_id: 0,
            veggie_name: '',
            veggie_description: '',
            veggie_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new veggies
      this.veggieService.createVeggie(this.currentVeggie).subscribe({
        next: (updateVeggie) => {
          this.veggies.push(updateVeggie);
          // Form reset
          this.currentVeggie = {
            veggie_id: 0,
            veggie_name: '',
            veggie_description: '',
            veggie_active: false
          };
        },
        error: (err) => console.error("Could not create.", err)
      });
    }
  }

}
