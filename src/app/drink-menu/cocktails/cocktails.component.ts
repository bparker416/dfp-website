import {Component, OnInit} from '@angular/core';
import {CocktailsService} from "../../models/drink-menu-models/cocktails/cocktails.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.css'
})
export class CocktailsComponent implements OnInit {
  cocktails: any[] = [];

  constructor(private cocktailService: CocktailsService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe( (data) => { this.cocktails = data });
  }
}
