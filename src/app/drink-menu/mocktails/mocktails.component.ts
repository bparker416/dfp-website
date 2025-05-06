import {Component, OnInit} from '@angular/core';
import {MocktailsService} from "../../models/drink-menu-models/mocktails/mocktails.service";
import {CommonModule} from "@angular/common";
import {} from "@angular/common/http";

@Component({
    selector: 'app-mocktails',
    imports: [CommonModule],
    templateUrl: './mocktails.component.html',
    standalone: true,
    styleUrl: './mocktails.component.css'
})
export class MocktailsComponent implements OnInit {
  mocktails: any[] = [];

  constructor(private mocktailsService: MocktailsService) { }

  ngOnInit(): void {
    this.mocktailsService.getActiveMocktails().subscribe((data) => this.mocktails = data);
  }

}
