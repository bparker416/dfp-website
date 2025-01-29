import {Component, OnInit} from '@angular/core';
import {DrinksService} from "../../models/drink-menu-models/drinks/drinks.service";
import {CommonModule} from "@angular/common";
import {} from "@angular/common/http";
import {Drinks} from "../../models/drink-menu-models/drinks/drinks";

@Component({
    selector: 'app-drinks',
    imports: [CommonModule,
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        ],
    templateUrl: './drinks.component.html',
    standalone: true,
    styleUrl: './drinks.component.css'
})
export class DrinksComponent implements OnInit {
  drinks: any[] = [];

  constructor(private drinksService: DrinksService) {
  }

  ngOnInit(): void {
    this.drinksService.getActiveDrinks().subscribe((data) => {
      this.drinks = data
    });
  }
}
