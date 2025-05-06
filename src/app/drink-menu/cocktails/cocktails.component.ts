import {Component, OnInit} from '@angular/core';
import {CocktailsService} from "../../models/drink-menu-models/cocktails/cocktails.service";
import {CommonModule} from "@angular/common";
import {} from "@angular/common/http";

@Component({
    selector: 'app-cocktails',
    imports: [CommonModule],
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
