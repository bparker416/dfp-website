import {Component, OnInit} from '@angular/core';
import {MocktailsService} from "../../models/drink-menu-models/mocktails/mocktails.service";

@Component({
  selector: 'app-mocktails',
  standalone: true,
  imports: [],
  templateUrl: './mocktails.component.html',
  styleUrl: './mocktails.component.css'
})
export class MocktailsComponent implements OnInit {
  mocktails: any[] = [];

  constructor(private mocktailsService: MocktailsService) { }

  ngOnInit(): void {
    this.mocktailsService.getMocktails().subscribe((data) => this.mocktails = data);
  }

}
