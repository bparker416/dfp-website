import {Component, OnInit} from '@angular/core';
import {Mocktails} from "../../models/drink-menu-models/mocktails/mocktails";
import {MocktailsComponent} from "../../drink-menu/mocktails/mocktails.component";
import {MocktailsService} from "../../models/drink-menu-models/mocktails/mocktails.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-updates-mocktails',
  standalone: true,
  imports: [MocktailsComponent, FormsModule, NgIf, NgForOf, CommonModule, HttpClientModule],
  templateUrl: './updates-mocktails.component.html',
  styleUrl: './updates-mocktails.component.css'
})
export class UpdatesMocktailsComponent implements OnInit {
  mocktails: any[] = [];

  currentMocktail: Mocktails = {
    mocktail_id: 0,
    mocktail_name: '',
    mocktail_price: 0,
    mocktail_description: '',
    mocktail_active: true
  };

  isEditMode = false;

  constructor(private mocktailService: MocktailsService) { }

  ngOnInit(): void {
    this.mocktailService.getMocktails().subscribe((data) => { this.mocktails = data });
  }

  loadMocktails(): void {
    this.mocktailService.getMocktails().subscribe((data) => { this.mocktails = data });
  }

  initNewMocktail(): void {
    this.isEditMode = false;
    this.currentMocktail = {
      mocktail_id: 0,
      mocktail_name: '',
      mocktail_price: 0,
      mocktail_description: '',
      mocktail_active: false
    };
  }

  editMocktail(mocktail: Mocktails): void {
    this.isEditMode = true;
    // Make copy of drink array to edit
    this.currentMocktail = { ...mocktail };
  }

  deleteMocktail(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure you want to delete this Mocktail?")) {
      this.mocktailService.deleteMocktail(id).subscribe({
        next: () => {
          this.mocktails = this.mocktails.filter((mocktail) => mocktail.id !== id);
        }
      });
    }
  }

  toggleMocktailActive(id: number | undefined): void {
    if (!id) return;
    this.mocktailService.toggleMocktailActive(id).subscribe({
      next: (updateMocktail) => {
        const index = this.mocktails.findIndex((mocktail) => mocktail.mocktail_id === updateMocktail.mocktail_id);
        if (index !== -1) {
          this.mocktails[index] = updateMocktail;
        }
      }
    });
  }

  saveMocktail(): void {
    if (this.isEditMode && this.currentMocktail.mocktail_id) {
      // Update existing mocktails
      this.mocktailService.updateMocktail(this.currentMocktail.mocktail_id, this.currentMocktail).subscribe({
        next: (updateMocktail) => {
          const index = this.mocktails.findIndex((mocktail) => mocktail.mocktail_id === updateMocktail.mocktail_id);
          if (index !== -1) {
            this.mocktails[index] = updateMocktail;
          }
          // Form reset
          this.isEditMode = false;
          this.currentMocktail = {
            mocktail_id: 0,
            mocktail_name: '',
            mocktail_price: 0,
            mocktail_description: '',
            mocktail_active: false
            };
          },
        error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new mocktails
      this.mocktailService.createMocktail(this.currentMocktail).subscribe({
        next: (updateMocktail) => {
          this.mocktails.push(updateMocktail);
          // Form reset
          this.currentMocktail = {
            mocktail_id: 0,
            mocktail_name: '',
            mocktail_price: 0,
            mocktail_description: '',
            mocktail_active: false
          };
        },
        error
        : (err) => console.error("Could not create.", err)
      });
    }
  }
}
