import {Component, OnInit} from '@angular/core';
import {MocktailsService} from "../../models/drink-menu-models/mocktails/mocktails.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-mocktails',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
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
