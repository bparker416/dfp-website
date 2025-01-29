import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {VeggieService} from "../../../models/food-menu-models/veggie/veggie.service";

@Component({
  selector: 'app-veggie',
  imports: [CommonModule],
  templateUrl: './veggie.component.html',
  standalone: true,
  styleUrl: './veggie.component.css'
})
export class VeggieComponent implements OnInit {
  veggies: any[] = [];

  constructor(private veggieService: VeggieService) { }

  ngOnInit(): void {
    this.veggieService.getActiveVeggies().subscribe( (data) => { this.veggies = data });
  }
}
