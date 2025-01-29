import {Component, OnInit} from '@angular/core';
import {MocktailsService} from "../../models/drink-menu-models/mocktails/mocktails.service";
import {CommonModule} from "@angular/common";
import {} from "@angular/common/http";

@Component({
  selector: 'app-mocktails',
  standalone: true,
  imports: [CommonModule, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule],
  templateUrl: './mocktails.component.html',
  styleUrl: './mocktails.component.css'
})
export class MocktailsComponent implements OnInit {
  mocktails: any[] = [];

  constructor(private mocktailsService: MocktailsService) { }

  ngOnInit(): void {
    this.mocktailsService.getActiveMocktails().subscribe((data) => this.mocktails = data);
  }

}
