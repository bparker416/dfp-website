import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CheeseService} from "../../models/food-menu-models/cheese/cheese.service";

@Component({
  selector: 'app-cheese',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cheese.component.html',
  styleUrl: './cheese.component.css'
})
export class CheeseComponent implements OnInit {
  cheesePriceIsRegular: any[] = [];
  cheesePriceIsOne: any[] = [];
  cheesePriceIsTwo: any[] = [];

  constructor(private cheeseService: CheeseService) { }

  ngOnInit(): void {
    this.cheeseService.cheesePriceIsRegular().subscribe( (data) => { this.cheesePriceIsRegular = data });
    this.cheeseService.cheesePriceIsOne().subscribe( (data) => { this.cheesePriceIsOne = data });
    this.cheeseService.cheesePriceIsTwo().subscribe( (data) => { this.cheesePriceIsTwo = data });
  }
}
