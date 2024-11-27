import {Component, OnInit} from '@angular/core';
import {DessertService} from "../../models/food-menu-models/dessert/dessert.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-dessert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.css'
})
export class DessertComponent implements OnInit {
  desserts: any[] = [];

  constructor(private dessertService: DessertService) { }

  ngOnInit(): void {
    this.dessertService.getDesserts().subscribe( (data) => { this.desserts = data });
  }
}
