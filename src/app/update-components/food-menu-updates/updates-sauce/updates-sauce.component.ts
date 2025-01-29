import {Component, OnInit} from '@angular/core';
import {Sauce} from "../../../models/food-menu-models/sauce/sauce";
import {SauceService} from "../../../models/food-menu-models/sauce/sauce.service";
import {SauceComponent} from "../../../food-menu/build-your-own/sauce/sauce.component";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {} from "@angular/common/http";

@Component({
  selector: 'app-updates-sauce',
  standalone: true,
  imports: [SauceComponent, FormsModule, NgIf, NgForOf, CommonModule, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule],
  templateUrl: './updates-sauce.component.html',
  styleUrl: './updates-sauce.component.css'
})
export class UpdatesSauceComponent implements OnInit {
  sauces: any[] = [];

  currentSauce: Sauce = {
    sauce_id: 0,
    sauce_name: '',
    sauce_active: false
  };

  isEditMode = false;

  constructor(private sauceService: SauceService) { }

  ngOnInit(): void {
    this.sauceService.getSauces().subscribe((data) => { this.sauces = data });
  }

  loadSauce(): void {
    this.sauceService.getSauces().subscribe((data) => { this.sauces = data });
  }

  initNewSauce(): void {
    this.isEditMode = false;
    this.currentSauce = {
      sauce_id: 0,
      sauce_name: '',
      sauce_active: false
    };
  }

  editSauce(sauce: Sauce): void {
    this.isEditMode = true;
    // Make copy of sauce array to edit
    this.currentSauce = { ...sauce };
  }

  deleteSauce(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure you want to delete this Sauce?")) {
      this.sauceService.deleteSauce(id).subscribe({
        next: () => {
          this.sauces = this.sauces.filter((sauce) => sauce.id !== id);
        }
      });
    }
  }

  toggleSauceActive(id: number | undefined): void {
    if(!id) return;
    this.sauceService.toggleSauceActive(id).subscribe({
      next: (updateSauce) => {
        const index = this.sauces.findIndex((sauce) => sauce.sauce_id === updateSauce.sauce_id);
        if (index !== -1) {
          this.sauces[index] = updateSauce;
        }
      }
    });
  }

  saveSauce(): void {
    if (this.isEditMode && this.currentSauce.sauce_id) {
      // Update existing sauces
      this.sauceService.updateSauce(this.currentSauce.sauce_id, this.currentSauce).subscribe({
        next: (updateSauce) => {
          const index = this.sauces.findIndex((sauce) => sauce.sauce_id === updateSauce.sauce_id);
          if (index !== -1) {
            this.sauces[index] = updateSauce;
          }
          // Form reset
          this.isEditMode = false;
          this.currentSauce = {
            sauce_id: 0,
            sauce_name: '',
            sauce_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new sauces
      this.sauceService.createSauce(this.currentSauce).subscribe({
        next: (updateSauce) => {
          this.sauces.push(updateSauce);
          // Form reset
          this.currentSauce = {
            sauce_id: 0,
            sauce_name: '',
            sauce_active: false
          };
        },
        error: (err) => console.error("Could not create.", err)
      });
    }
  }
}
