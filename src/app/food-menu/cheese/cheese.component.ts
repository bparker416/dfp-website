import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CheeseService} from "../../models/food-menu-models/cheese/cheese.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-cheese',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cheese.component.html',
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
