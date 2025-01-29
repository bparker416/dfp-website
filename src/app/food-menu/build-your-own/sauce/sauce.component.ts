import {Component, OnInit} from '@angular/core';
import {SauceService} from "../../../models/food-menu-models/sauce/sauce.service";
import {CommonModule} from "@angular/common";
import {Sauce} from "../../../models/food-menu-models/sauce/sauce";
import {} from "@angular/common/http";

@Component({
  selector: 'app-sauce',
  standalone: true,
  imports: [CommonModule, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule],
  templateUrl: './sauce.component.html',
  styleUrl: './sauce.component.css'
})
export class SauceComponent implements OnInit {
  sauces: any[] = [];

  constructor(private sauceService: SauceService) { }

  ngOnInit(): void {
    this.sauceService.getActiveSauces().subscribe( (data) => { this.sauces = data });
  }
}
