import {Component, OnInit} from '@angular/core';
import {Salad} from "../../../models/food-menu-models/salad/salad";
import {SaladService} from "../../../models/food-menu-models/salad/salad.service";
import {SaladComponent} from "../../../food-menu/salad/salad.component";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {} from "@angular/common/http";

@Component({
  selector: 'app-updates-salad',
  imports: [SaladComponent, FormsModule, NgIf, NgForOf, CommonModule,
    // TODO: `HttpClientModule` should not be imported into a component directly.
    // Please refactor the code to add `provideHttpClient()` call to the provider list in the
    // application bootstrap logic and remove the `HttpClientModule` import from this component.
  ],
  templateUrl: './updates-salad.component.html',
  standalone: true,
  styleUrl: './updates-salad.component.css'
})
export class UpdatesSaladComponent implements OnInit {
  salads: any[] = [];

  currentSalad: Salad = {
    salad_id: 0,
    salad_name: '',
    small_price: 0,
    large_price: 0,
    salad_description: '',
    additional_text: '',
    salad_active: false
  };

  isEditMode = false;

  constructor(private saladService: SaladService) { }

  ngOnInit(): void {
    this.saladService.getSalads().subscribe((data) => { this.salads = data });
  }

  loadSalads(): void {
    this.saladService.getSalads().subscribe((data) => {{ this.salads = data }});
  }

  initNewSalad(): void {
    this.isEditMode = false
    this.currentSalad = {
      salad_id: 0,
      salad_name: '',
      small_price: 0,
      large_price: 0,
      salad_description: '',
      additional_text: '',
      salad_active: false
    };
  }

  editSalad(salad: Salad): void {
    this.isEditMode = true;
    // Make copy of salad array to edit
    this.currentSalad = { ...salad };
  }

  deleteSalad(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure you want to delete this Salad?")) {
      this.saladService.deleteSalad(id).subscribe({
        next: () => {
          this.salads = this.salads.filter((salad) => salad.id != id);
        }
      });
    }
  }

  toggleSaladActive(id: number | undefined): void {
    if (!id) return;
    this.saladService.toggleSaladActive(id).subscribe({
      next: (updateSalad) => {
        const index = this.salads.findIndex((salad) => salad.salad_id === updateSalad.salad_id);
        if (index !== -1) {
          this.salads[index] = updateSalad;
        }
      }
    });
  }

  saveSalad(): void {
    if (this.isEditMode && this.currentSalad.salad_id) {
      // Update existing salads
      this.saladService.updateSalad(this.currentSalad.salad_id, this.currentSalad).subscribe({
        next: (updateSalad) => {
          const index = this.salads.findIndex((salad) => salad.salad_id === updateSalad.salad_id)
          if (index !== -1) {
            this.salads[index] = updateSalad;
          }
          // Form reset
          this.isEditMode = false;
          this.currentSalad = {
            salad_id: 0,
            salad_name: '',
            small_price: 0,
            large_price: 0,
            salad_description: '',
            additional_text: '',
            salad_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new salads
      this.saladService.createSalad(this.currentSalad).subscribe({
        next: (updateSalad) => {
          this.salads.push(updateSalad);
          // Form reset
          this.currentSalad = {
            salad_id: 0,
            salad_name: '',
            small_price: 0,
            large_price: 0,
            salad_description: '',
            additional_text: '',
            salad_active: false
          };
        },
        error: (err) => console.error("Could not create.", err)
      });
    }
  }

}
