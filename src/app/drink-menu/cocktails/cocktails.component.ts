import {Component, OnInit} from '@angular/core';
import {CocktailsService} from "../../models/drink-menu-models/cocktails/cocktails.service";

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [],
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
