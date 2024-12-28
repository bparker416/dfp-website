import {Component, OnInit} from '@angular/core';
import {Meat} from "../../../models/food-menu-models/meat/meat";
import {MeatService} from "../../../models/food-menu-models/meat/meat.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-updates-meat',
  standalone: true,
  imports: [],
  templateUrl: './updates-meat.component.html',
  styleUrl: './updates-meat.component.css'
})
export class UpdatesMeatComponent implements OnInit {
  meat: any[] = [];

  currentMeat: Meat = {
    meat_id: 0,
    meat_name: '',
    meat_price: 0,
    meat_description: '',
    meat_active: false
  };

  isEditMode = false;

  constructor(private meatService: MeatService) { }

  ngOnInit(): void {
    this.meatService.getAllMeat().subscribe((data) => { this.meat = data });
  }

  loadMeat(): void {
    this.meatService.getAllMeat().subscribe((data) => { this.meat = data });
  }

  initNewDrink(): void {
    this.isEditMode = false;
    this.currentMeat = {
      meat_id: 0,
      meat_name: '',
      meat_price: 0,
      meat_description: '',
      meat_active: false
    };
  }

  editMeat(meat: Meat): void {
    this.isEditMode = true;
    // Make copy of meat array to edit
    this.currentMeat = { ...meat };
  }

  deleteMeat(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure you want to delete this Meat?")) {
      this.meatService.deleteMeat(id).subscribe({
        next: () => {
          this.meat = this.meat.filter((meat) => meat.id !== id);
        }
      });
    }
  }

  toggleMeatActive(id: number | undefined): void {
    if (!id) return;
    this.meatService.toggleMeatActive(id).subscribe({
      next: (updateMeat) => {
        const index = this.meat.findIndex((meat) => meat.meat_id === updateMeat.meat_id);
        if (index !== -1) {
          this.meat[index] = updateMeat;
        }
      }
    });
  }

  saveMeat(): void {
    if (this.isEditMode && this.currentMeat.meat_id) {
      // Update existing meats
      this.meatService.updateMeat(this.currentMeat.meat_id, this.currentMeat).subscribe({
        next: (updateMeat) => {
          const index = this.meat.findIndex((meat) => meat.meat_id === updateMeat.meat_id);
          if (index !== -1) {
            this.meat[index] = updateMeat;
          }
          // Form reset
          this.isEditMode = false;
          this.currentMeat = {
            meat_id: 0,
            meat_name: '',
            meat_price: 0,
            meat_description: '',
            meat_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new meats
      this.meatService.createMeat(this.currentMeat).subscribe({
        next: (updateMeat) => {
          this.meat.push(updateMeat);
          // Form reset
          this.currentMeat = {
            meat_id: 0,
            meat_name: '',
            meat_price: 0,
            meat_description: '',
            meat_active: false
          };
        },
        error: (err) => console.error("Could not create.", err)
      });
    }
  }

}
