import {Component, OnInit} from '@angular/core';
import {LibationsComponent} from "../../../drink-menu/libations/libations.component";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {} from "@angular/common/http";
import {Libations} from "../../../models/drink-menu-models/libations/libations";
import {LibationsService} from "../../../models/drink-menu-models/libations/libations.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
    selector: 'app-updates-libations',
    imports: [LibationsComponent, FormsModule, NgIf, NgForOf, CommonModule,
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        ],
    templateUrl: './updates-libations.component.html',
    standalone: true,
    styleUrl: './updates-libations.component.css'
})
export class UpdatesLibationsComponent implements OnInit {
  libations: any[] = [];

  currentLibation: Libations = {
    libation_id: 0,
    libation_name: '',
    libation_price: 0,
    libation_description: '',
    libation_active: false
  };

  isEditMode = false;

  constructor(private libationsService: LibationsService) { }

  ngOnInit(): void {
    this.libationsService.getLibations().subscribe((data) => this.libations = data );
  }

  loadLibations(): void {
    this.libationsService.getLibations().subscribe((data) => { this.libations = data });
  }

  initNewLibation(): void {
    this.isEditMode = false;
    this.currentLibation = {
      libation_id: 0,
      libation_name: '',
      libation_price: 0,
      libation_description: '',
      libation_active: false
    };
  }

  editLibation(libation: Libations): void {
    this.isEditMode = true;
    // Make copy of libation array to edit
    this.currentLibation = { ...libation };
  }

  deleteLibation(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure you want to delete this Seasonal Libation?")) {
      this.libationsService.deleteLibation(id).subscribe({
        next: () => {
          this.libations = this.libations.filter((libation) => libation.id !== id);
        }
      });
    }
  }

  toggleLibationActive(id: number | undefined): void {
    if (!id) return;
    this.libationsService.toggleLibationActive(id).subscribe({
      next: (updateLibation) => {
        const index = this.libations.findIndex((libation) => libation.libation_id === updateLibation.libation_id);
      }
    });
  }

  saveLibation(): void {
    if (this.isEditMode && this.currentLibation.libation_id) {
      // Update existing libations
      this.libationsService.updateLibation(this.currentLibation.libation_id, this.currentLibation).subscribe({
        next: (updateLibation) => {
          const index = this.libations.findIndex((libation) => libation.libation_id === updateLibation.libation_id);
          if (index !== -1) {
            this.libations[index] = updateLibation;
          }
        // Form reset
          this.isEditMode = false;
          this.currentLibation = {
            libation_id: 0,
            libation_name: '',
            libation_price: 0,
            libation_description: '',
            libation_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new libations
      this.libationsService.createLibation(this.currentLibation).subscribe({
        next: (updateLibation) => {
          this.libations.push(updateLibation);
          // Form reset
          this.currentLibation = {
            libation_id: 0,
            libation_name: '',
            libation_price: 0,
            libation_description: '',
            libation_active: false
          };
        },
        error: (err) => console.error("Could not create.", err)
      });
    }
  }
}
