import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CheeseService} from "../../../models/food-menu-models/cheese/cheese.service";
import {} from "@angular/common/http";

@Component({
    selector: 'app-cheese',
    imports: [CommonModule,
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        ],
    templateUrl: './cheese.component.html',
    standalone: true,
    styleUrl: './cheese.component.css'
})
export class CheeseComponent implements OnInit {
  allCheeses: any[] = [];

  constructor(private cheeseService: CheeseService) {}

  ngOnInit(): void {
    this.cheeseService.cheesePriceIsRegular().subscribe((cheesePriceRegular) => {
      this.cheeseService.cheesePriceIsOne().subscribe((cheesePriceOne) => {
        this.cheeseService.cheesePriceIsTwo().subscribe((cheesePriceTwo) => {
          this.allCheeses = [...cheesePriceRegular, ...cheesePriceOne, ...cheesePriceTwo].sort(
            (a, b) => (a.cheese_price ?? 0) - (b.cheese_price ?? 0)
          );
        })
      })
    })
  }
}
