import {Component, OnInit} from '@angular/core';
import {DessertService} from "../../models/food-menu-models/dessert/dessert.service";
import {CommonModule} from "@angular/common";
import {} from "@angular/common/http";

@Component({
    selector: 'app-dessert',
    imports: [CommonModule,
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        ],
    templateUrl: './dessert.component.html',
    standalone: true,
    styleUrl: './dessert.component.css'
})
export class DessertComponent implements OnInit {
  desserts: any[] = [];

  constructor(private dessertService: DessertService) { }

  ngOnInit(): void {
    this.dessertService.getActiveDesserts().subscribe( (data) => { this.desserts = data });
  }
}
