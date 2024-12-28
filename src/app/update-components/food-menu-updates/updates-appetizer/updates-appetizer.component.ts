import {Component, OnInit} from '@angular/core';
import {Appetizer} from "../../../models/food-menu-models/appetizer/appetizer";
import {AppetizerService} from "../../../models/food-menu-models/appetizer/appetizer.service";
import {app} from "../../../../../server";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-updates-appetizer',
  standalone: true,
  imports: [],
  templateUrl: './updates-appetizer.component.html',
  styleUrl: './updates-appetizer.component.css'
})
export class UpdatesAppetizerComponent implements OnInit {
  apps: any[] = [];

  currentApps: Appetizer = {
    app_id: 0,
    app_name: '',
    app_price: 0,
    app_description: '',
    additional_text: '',
    app_active: false
  };

  isEditMode = false;

  constructor(private appService: AppetizerService) { }

  ngOnInit(): void {
    this.appService.getAppetizers().subscribe((data) => { this.apps = data });
  }

  loadApps(): void {
    this.appService.getAppetizers().subscribe((data) => { this.apps = data });
  }

  initNewApp(): void {
    this.isEditMode = false;
    this.currentApps = {
      app_id: 0,
      app_name: '',
      app_price: 0,
      app_description: '',
      additional_text: '',
      app_active: false
    };
  }

  editApp(app: Appetizer): void {
    this.isEditMode = true;
    // Make copy of drink array to edit
    this.currentApps = { ...app };
  }

  deleteApp(id: number | undefined): void {
    if (!id) return;
    if (confirm("Are you sure you want to delete this Drink?")) {
      this.appService.deleteAppetizer(id).subscribe({
        next: () => {
          this.apps = this.apps.filter((app) => app.id != id);
        }
      });
    }
  }

  toggleAppActive(id: number | undefined): void {
    if (!id) return;
    this.appService.toggleAppetizerActive(id).subscribe({
      next: (updateApp) => {
        const index = this.apps.findIndex((apps) => apps.app_id === updateApp.app_id);
        if (index !== -1) {
          this.apps[index] = updateApp;
        }
      }
    });
  }

  saveApp(): void {
    if (this.isEditMode && this.currentApps.app_id) {
      // Update existing appetizers
      this.appService.updateAppetizer(this.currentApps.app_id, this.currentApps).subscribe({
        next: (updateApp) => {
          const index = this.apps.findIndex((app) => app.app_id === updateApp.app_id);
          if (index != -1) {
            this.apps[index] = updateApp;
          }
          // Form reset
          this.isEditMode = false;
          this.currentApps = {
            app_id: 0,
            app_name: '',
            app_price: 0,
            app_description: '',
            additional_text: '',
            app_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    }
  }

}
