import {Component, OnInit} from '@angular/core';
import {DrinksService} from "../../models/drink-menu-models/drinks/drinks.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {Drinks} from "../../models/drink-menu-models/drinks/drinks";

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent implements OnInit {
  drinks: any[] = [];

  constructor(private drinksService: DrinksService) {
  }

  ngOnInit(): void {
    this.drinksService.getDrinks().subscribe((data) => {
      this.drinks = data
    });
  }
}
