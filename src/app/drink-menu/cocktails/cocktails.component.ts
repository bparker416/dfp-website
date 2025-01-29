import {Component, OnInit} from '@angular/core';
import {CocktailsService} from "../../models/drink-menu-models/cocktails/cocktails.service";
import {CommonModule} from "@angular/common";
import {} from "@angular/common/http";

@Component({
    selector: 'app-cocktails',
    imports: [CommonModule,
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        ],
    templateUrl: './cocktails.component.html',
    standalone: true,
    styleUrl: './cocktails.component.css'
})
export class CocktailsComponent implements OnInit {
  cocktails: any[] = [];

  constructor(private cocktailService: CocktailsService) {}

  ngOnInit(): void {
    this.cocktailService.getActiveCocktails().subscribe( (data) => { this.cocktails = data });
  }
}
