import {Component, OnInit} from '@angular/core';
import {Sando} from "../../../models/food-menu-models/sando/sando";
import {SandoService} from "../../../models/food-menu-models/sando/sando.service";
import {SandoComponent} from "../../../food-menu/sando/sando.component";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {} from "@angular/common/http";

@Component({
  selector: 'app-updates-sando',
  imports: [SandoComponent, FormsModule, NgIf, NgForOf, CommonModule,
    // TODO: `HttpClientModule` should not be imported into a component directly.
    // Please refactor the code to add `provideHttpClient()` call to the provider list in the
    // application bootstrap logic and remove the `HttpClientModule` import from this component.
  ],
  templateUrl: './updates-sando.component.html',
  standalone: true,
  styleUrl: './updates-sando.component.css'
})
export class UpdatesSandoComponent implements OnInit {
  sandos: any[] = [];

  currentSando: Sando = {
    sando_id: 0,
    sando_name: '',
    sando_price: 0,
    sando_description: '',
    additional_text: '',
    sando_active: false
  };

  isEditMode = false;

  constructor(private sandoService: SandoService) { }

  ngOnInit(): void {
    this.sandoService.getSandos().subscribe((data) => { this.sandos = data });
  }

  loadSandos(): void {
    this.sandoService.getSandos().subscribe((data) => this.sandos = data);
  }

  initNewSando(): void {
    this.isEditMode = false;
    this.currentSando = {
      sando_id: 0,
      sando_name: '',
      sando_price: 0,
      sando_description: '',
      additional_text: '',
      sando_active: false
    };
  }
  editSando(sando: Sando): void {
    this.isEditMode = true;
    // Make copy of sando array to edit
    this.currentSando = { ...sando };
  }

  deleteSando(id: number | undefined) {
    if (!id) return;
    if (confirm("Are you sure you want to delete this Sando?")) {
      this.sandoService.deleteSando(id).subscribe({
        next: () => {
          this.sandos = this.sandos.filter((sando) => sando.id !== id);
        }
      });
    }
  }

  toggleSandoActive(id: number | undefined): void {
    if (!id) return;
    this.sandoService.toggleSandoActive(id).subscribe({
      next: (updateSando) => {
        const index = this.sandos.findIndex((sando) => sando.sando_id === updateSando.sando_id);
        if (index !== -1) {
          this.sandos[index] = updateSando;
        }
      }
    });
  }

  saveSando(): void {
    if (this.isEditMode && this.currentSando.sando_id) {
      // Update existing sandos
      this.sandoService.updateSando(this.currentSando.sando_id, this.currentSando).subscribe({
        next: (updateSando) => {
          const index = this.sandos.findIndex((sando) => sando.sando_id === updateSando.sando_id);
          if (index !== -1) {
            this.sandos[index] = updateSando;
          }
          // Form reset
          this.isEditMode = false;
          this.currentSando = {
            sando_id: 0,
            sando_name: '',
            sando_price: 0,
            sando_description: '',
            additional_text: '',
            sando_active: false
          };
        },
        error: (err) => console.error("Could not update.", err)
      });
    } else {
      // Create new sandos
      this.sandoService.createSando(this.currentSando).subscribe({
        next: (updateSando) => {
          this.sandos.push(updateSando);
          // Form reset
          this.currentSando = {
            sando_id: 0,
            sando_name: '',
            sando_price: 0,
            sando_description: '',
            additional_text: '',
            sando_active: false
          };
        },
        error: (err) => console.error("Could not create.", err)
      });
    }
  }
}
