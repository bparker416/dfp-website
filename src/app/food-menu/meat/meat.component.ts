import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MeatService} from "../../models/food-menu-models/meat/meat.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-meat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meat.component.html',
  styleUrl: './meat.component.css'
})
export class MeatComponent implements OnInit {
  meatPriceByThree: any[] = [];
  meatPriceByFour: any[] = [];

  constructor(private meatService: MeatService) { }

  ngOnInit(): void {
    this.meatService.meatPriceByThree().subscribe( (data) => { this.meatPriceByThree = data });
    this.meatService.meatPriceByFour().subscribe( (data) => { this.meatPriceByFour = data });
  }
}
