import {Component, OnInit} from '@angular/core';
import {SauceService} from "../../../models/food-menu-models/sauce/sauce.service";
import {CommonModule} from "@angular/common";
import {Sauce} from "../../../models/food-menu-models/sauce/sauce";
import {} from "@angular/common/http";

@Component({
    selector: 'app-sauce',
    imports: [CommonModule],
    templateUrl: './sauce.component.html',
    standalone: true,
    styleUrl: './sauce.component.css'
})
export class SauceComponent implements OnInit {
  sauces: any[] = [];

  constructor(private sauceService: SauceService) { }

  ngOnInit(): void {
    this.sauceService.getActiveSauces().subscribe( (data) => { this.sauces = data });
  }
}
