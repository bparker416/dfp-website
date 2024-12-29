import {Component, OnInit} from '@angular/core';
import {Side} from "../../../models/food-menu-models/side/side";
import {SideService} from "../../../models/food-menu-models/side/side.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-updates-sides',
  standalone: true,
  imports: [],
  templateUrl: './updates-sides.component.html',
  styleUrl: './updates-sides.component.css'
})
export class UpdatesSidesComponent implements OnInit {
  sides: any[] = [];

  currentSide: Side = {
    side_id: 0,
    side_name: '',
    side_price: 0,
    side_description: '',
    additional_text: '',
    side_active: false
  };

  isEditMode = false;

  constructor(private sideService: SideService) { }

  ngOnInit(): void {
    this.sideService.getSides().subscribe((data) => { this.sides = data });
  }

  loadSides(): void {
    this.sideService.getSides().subscribe((data) => { this.sides = data });
  }

  initNewSide(): void {
    this.isEditMode = false;
    this.currentSide = {
      side_id: 0,
      side_name: '',
      side_price: 0,
      side_description: '',
      additional_text: '',
      side_active: false
    };
  }

  editSide(side: Side): void {
    this.isEditMode = true;
    // Make copy of side array to edit
    this.currentSide = { ...side };
  }

  deleteSide(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure you want to delete this Side?")) {
      this.sideService.deleteSide(id).subscribe({
        next: () => {
          this.sides = this.sides.filter((side) => side.id !== id);
        }
      });
    }
  }

  toggleSideActive(id: number | undefined): void {
    if (!id) return;
    this.sideService.toggleSideActive(id).subscribe({
      next: (updateSide) => {
        const index = this.sides.findIndex((side) => side.side_id === updateSide.side_id);
        if (index !== -1) {
          this.sides[index] = updateSide;
        }
      }
    });
  }

  saveSide(): void {
    if (this.isEditMode && this.currentSide.side_id) {
      // Update existing sides
      this.sideService.updateSide(this.currentSide.side_id, this.currentSide).subscribe({
        next: (updateSide) => {
          const index = this.sides.findIndex((side) => side.side_id === updateSide.side_id);
          if (index !== -1) {
            this.sides[index] = updateSide;
          }
          // Form reset
          this.isEditMode = false;
          this.currentSide = {
            side_id: 0,
            side_name: '',
            side_price: 0,
            side_description: '',
            additional_text: '',
            side_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new sides
      this.sideService.createSide(this.currentSide).subscribe({
        next: (updateSide) => {
          this.sides.push(updateSide);
          // Form reset
          this.currentSide = {
            side_id: 0,
            side_name: '',
            side_price: 0,
            side_description: '',
            additional_text: '',
            side_active: false
          };
        },
        error: (err) => console.error("Could not create.", err)
      });
    }
  }
}
