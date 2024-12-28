import {Component, OnInit} from '@angular/core';
import {Cocktails} from "../../../models/drink-menu-models/cocktails/cocktails";
import {CocktailsService} from "../../../models/drink-menu-models/cocktails/cocktails.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-updates-cocktails',
  standalone: true,
  imports: [],
  templateUrl: './updates-cocktails.component.html',
  styleUrl: './updates-cocktails.component.css'
})
export class UpdatesCocktailsComponent implements OnInit {
  cocktails: any[] = [];

  currentCocktail: Cocktails = {
    cocktail_id: 0,
    cocktail_name: '',
    cocktail_price: 0,
    cocktail_description: '',
    cocktail_active: false
  };

  isEditMode = false;

  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit(): void {
    this.cocktailsService.getCocktails().subscribe((data) => { this.cocktails = data });
  }

  loadCocktails(): void {
    this.cocktailsService.getCocktails().subscribe((data) => { this.cocktails = data });
  }

  initNewCocktail(): void {
    this.isEditMode = false;
    this.currentCocktail = {
      cocktail_id: 0,
      cocktail_name: '',
      cocktail_price: 0,
      cocktail_description: '',
      cocktail_active: false
    };
  }

  editCocktail(cocktail: Cocktails): void {
    this.isEditMode = true;
    // Make copy of cocktail array to edit
    this.currentCocktail = { ...cocktail };
  }

  deleteCocktail(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure you want to delete this Cocktail?")) {
      this.cocktailsService.deleteCocktail(id).subscribe({
        next: () => {
          this.cocktails = this.cocktails.filter((cocktail) => cocktail.id !== id);
        }
      });
    }
  }

  toggleCocktailActive(id: number | undefined): void {
    if (!id) return;
    this.cocktailsService.toggleCocktailActive(id).subscribe({
      next: (updateCocktail) => {
        const index = this.cocktails.findIndex((cocktail) => cocktail.cocktail_id === updateCocktail.cocktail_id);
      }
    });
  }

  saveCocktail(): void {
    if (this.isEditMode && this.currentCocktail.cocktail_id) {
      // Update existing cocktails
      this.cocktailsService.updateCocktail(this.currentCocktail.cocktail_id, this.currentCocktail).subscribe({
        next: (updateCocktail) => {
          const index = this.cocktails.findIndex((cocktail) => cocktail.cocktail_id === updateCocktail.cocktail_id);
          if (index !== -1) {
            this.cocktails[index] = updateCocktail;
          }
          // Form reset
          this.isEditMode = false;
          this.currentCocktail = {
            cocktail_id: 0,
            cocktail_name: '',
            cocktail_price: 0,
            cocktail_description: '',
            cocktail_active: false
            };
          },
          error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new cocktails
      this.cocktailsService.createCocktail(this.currentCocktail).subscribe({
        next: (updateCocktail) => {
          this.cocktails.push(updateCocktail);
          // Form reset
          this.currentCocktail = {
            cocktail_id: 0,
            cocktail_name: '',
            cocktail_price: 0,
            cocktail_description: '',
            cocktail_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    }
  }

}
